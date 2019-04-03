import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({onClick, onDelete, completed, id, text}) => (
    <li>
       <span
           onClick={onClick}
           style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</span>
       <span onClick={onDelete} className="delete-todo" />
    </li>
);

Todo.propTypes = {
   onClick: PropTypes.func.isRequired,
   completed: PropTypes.bool.isRequired,
   text: PropTypes.string.isRequired,
};

export default Todo
