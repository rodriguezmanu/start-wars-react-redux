import {
  GET_EPISODE_REQUEST,
  GET_EPISODE_SUCCESS,
  GET_EPISODE_FAILURE,
} from '../constants/actionTypes';

const initialState = {
  isFetching: false,
};

const episode = (state = initialState, action) => {
  switch (action.type) {
    case GET_EPISODE_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_EPISODE_SUCCESS:
      return {
        ...state,
        data: action.data.results.filter(item => item.episode_id === Number(action.payload))[0],
        isFetching: false,
      };
    case GET_EPISODE_FAILURE:
      return {
        ...state,
        errors: action.errors,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default episode;
