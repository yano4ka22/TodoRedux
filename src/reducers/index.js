import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import todos from './todos'
import { routerReducer } from 'react-router-redux';

const todoApp = combineReducers({
   routing: routerReducer,
   visibilityFilter,
   todos
});

export default todoApp;
