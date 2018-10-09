import { combineReducers } from 'redux';
import movies from './movies.reducer';
import episode from './episode.reducer';

const rootReducer = combineReducers({
  movies,
  episode,
});

export default rootReducer;
