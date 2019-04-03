import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick, onDeleteClick })=> {
   if (todos.length !== 0) {
      return <ul>
         {todos.map((todo, index) => (
             <Todo key={index} {...todo} onClick={() => onTodoClick(index)} onDelete={() => onDeleteClick(todo.id)}/>
         ))}
      </ul>
   }

   return '';
};

TodoList.propTypes = {
   todos: PropTypes.arrayOf(
       PropTypes.shape({
          id: PropTypes.number.isRequired,
          completed: PropTypes.bool.isRequired
       }).isRequired,
   ).isRequired,
   onTodoClick: PropTypes.func.isRequired
};

export default TodoList
