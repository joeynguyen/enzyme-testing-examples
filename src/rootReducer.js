import { combineReducers } from 'redux';
import { todos, visibilityFilter }  from './todos/reducers';

const rootReducer = combineReducers({
  todos,
  visibilityFilter
});

export default rootReducer;
