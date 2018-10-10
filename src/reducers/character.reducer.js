import {
  GET_CHARACTER_REQUEST,
  GET_CHARACTER_SUCCESS,
  GET_CHARACTER_FAILURE,
} from '../constants/actionTypes';

const initialState = {
  isFetching: false,
};

const character = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_CHARACTER_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        isFetching: false,
      };
    case GET_CHARACTER_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default character;
