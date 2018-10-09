import {
  GET_MOVIES_SUCCESS,
  GET_MOVIES_REQUEST,
  GET_MOVIES_FAILURE,
  GET_EPISODE_REQUEST,
  GET_EPISODE_SUCCESS,
  GET_EPISODE_FAILURE,
} from '../constants/actionTypes';
import { API } from '../constants/endpoints';
import { CALL_API } from '../constants/variables';

/**
 * GetMovies API handler
 */
export const getMovies = () => ({
  [CALL_API]: {
    method: 'get',
    types: [GET_MOVIES_REQUEST, GET_MOVIES_SUCCESS, GET_MOVIES_FAILURE],
    endpoint: `${API.URL + API.FILMS}`,
  },
});

/**
 * Get Single Episode API handler
 *
 * @param {Number} id
 */
export const getEpisode = id => ({
  [CALL_API]: {
    method: 'get',
    payload: id,
    types: [GET_EPISODE_REQUEST, GET_EPISODE_SUCCESS, GET_EPISODE_FAILURE],
    endpoint: `${API.URL + API.FILMS}`,
  },
});
