import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const TodoList = ({ todos, onTodoClick, onDeleteClick, onEditClick })=> {
   if (todos.length !== 0) {
      return <ul>
         {todos.map((todo, index) => (
             <TodoItem key={todo.id} {...todo} onClick={() => onTodoClick(index)}
                  onDelete={() => onDeleteClick(todo.id)} {...onEditClick} />
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
