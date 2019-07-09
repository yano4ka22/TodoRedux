import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
   let input;

   return (
       <div className={'todo_form'}>
          <form
              onSubmit={e => {
                 e.preventDefault();
                 if (!input.value.trim()) {
                    return;
                 }

                 dispatch(addTodo(input.value));
                 input.value = '';
              }}
          >
             <input placeholder='Text task' ref={node => { input = node }} />
             <button type="submit">Create New Task</button>
          </form>
       </div>
   )
};

AddTodo = connect()(AddTodo);

export default AddTodo
