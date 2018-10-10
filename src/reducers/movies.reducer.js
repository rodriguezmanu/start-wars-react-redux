import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
} from '../constants/actionTypes';

const initialState = {
  isFetching: false,
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        isFetching: false,
      };
    case GET_MOVIES_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default movies;
