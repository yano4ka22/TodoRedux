import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
   let name, description, dateComplete;

   return (
       <div className={'todo_form'}>
          <form
              onSubmit={e => {
                 e.preventDefault();
                 if (!name.value.trim()) {
                    return;
                 }

                 dispatch(addTodo({
                     name: name.value,
                     description: description.value,
                     dateComplete: dateComplete.value
                 }));
                 name.value = '';
                 description.value = '';
                 dateComplete.value = '';
              }}
          >
             <input placeholder='Name task' ref={node => { name = node }} />
             <input placeholder='Description task' ref={node => { description = node }} />
             <input placeholder='Date of completion' ref={node => { dateComplete = node }} />
             <button type="submit">Create New Task</button>
          </form>
       </div>
   )
};

AddTodo = connect()(AddTodo);

export default AddTodo
