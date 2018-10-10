import { RSAA } from 'redux-api-middleware';
import {
  GET_MOVIES_SUCCESS,
  GET_MOVIES_REQUEST,
  GET_MOVIES_FAILURE,
  GET_EPISODE_REQUEST,
  GET_EPISODE_SUCCESS,
  GET_EPISODE_FAILURE,
} from '../constants/actionTypes';
import { API } from '../constants/endpoints';

/**
 * GetMovies API handler
 */
export const getMovies = () => ({
  [RSAA]: {
    method: 'get',
    types: [GET_MOVIES_REQUEST, GET_MOVIES_SUCCESS, GET_MOVIES_FAILURE],
    endpoint: `${API.URL + API.FILMS}`,
  },
});

/**
 * Build all url array and get data
 * @param {Object} data
 */
const buildAllResponse = async data => {
  try {
    return await Promise.all(
      data.map(request =>
        fetch(request)
          .then(response => response.json())
          .then(data => data)
      )
    );
  } catch (error) {
    return null;
  }
};

/**
 * Get Single Episode API handler
 *
 * @param {Number} id
 */
export const getEpisode = id => ({
  [RSAA]: {
    method: 'get',
    types: [GET_EPISODE_REQUEST, GET_EPISODE_SUCCESS, GET_EPISODE_FAILURE],
    endpoint: `${API.URL + API.FILMS}/${id}`,
    fetch: async (...args) => {
      const res = await fetch(...args);
      const json = await res.json();
      const allSpecies = await buildAllResponse(json.species);
      const allCharacters = await buildAllResponse(json.characters);

      return new Response(
        JSON.stringify({
          ...json,
          allSpecies,
          allCharacters,
        }),
        {
          status: json.error || !allSpecies || !allCharacters ? 500 : 200,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    },
  },
});
