import { combineReducers } from 'redux';
import movies from './movies.reducer';
import episode from './episode.reducer';
import character from './character.reducer';

const rootReducer = combineReducers({
  movies,
  episode,
  character,
});

export default rootReducer;
