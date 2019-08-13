import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import DateInput from '../components/Utils/DateInput'

let AddTodo = ({ dispatch, getData }) => {
   let name, description, dateComplete;

   getData = (data) => {console.log('data', data); dateComplete = data};

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
                     dateComplete: dateComplete
                 }));

                 name.value = '';
                 description.value = '';
                 dateComplete = '';
              }}
          >
             <input placeholder='Name task' ref={node => { name = node }} />
             <input placeholder='Description task' ref={node => { description = node }} />
             <DateInput getData={getData} />
             <button type="submit">Create New Task</button>
          </form>
       </div>
   )
};

AddTodo = connect()(AddTodo);

export default AddTodo
