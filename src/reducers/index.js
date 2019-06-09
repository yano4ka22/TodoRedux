import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import todos from './todos'
import persons from './persons'
import { routerReducer } from 'react-router-redux'

const todoApp = combineReducers({
   routing: routerReducer,
   visibilityFilter,
   todos,
   persons
});

export default todoApp;
