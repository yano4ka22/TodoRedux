import { ADD_TODO, SET_VISIBILITY_FILTER } from '../constants/ActionTypes'

export function addTodo(text) {
   return {
      type: ADD_TODO,
      text
   }
}

export const VisibilityFilters = {
   SHOW_ALL: 'SHOW_ALL',
   SHOW_COMPLETED: 'SHOW_COMPLETED',
   SHOW_ACTIVE: 'SHOW_ACTIVE'
};
