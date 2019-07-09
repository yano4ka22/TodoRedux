import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
   constructor(props) {
      super(props);
      this.handleSave = this.handleSave.bind(this);
   }
   static propTypes = {
      onClick: PropTypes.func.isRequired,
      completed: PropTypes.bool.isRequired,
   }

   state = {
      editing: false,
      myValue: null
   }

   componentDidMount() {
      this.setState({ myValue: this.props.text })
   }

   handleClick = () => {
      this.setState({ editing: true })
   }

   // TODO сохранять данные после редактирования
   handleSave = (id, text) => {
      if (text.length === 0) {
         this.props.onDelete(id)
      } else {
         this.props.editTodo({id: id, text: text})
      }

      this.setState({
         editing: false,
         myValue: text
      })
   }

   onChangeHandler = (event) => {
      console.log('e.target.value', event.target.value);
      this.setState({myValue: event.target.value})
   }

   render() {
      const { onClick, onDelete, completed, id } = this.props

      let element;
      if (this.state.editing) {
         element = (
            <div className="todo-view">
               <input className='todo-input' value={this.state.myValue} onChange={this.onChangeHandler} />
               <span onClick={(myValue) => this.handleSave(id, this.state.myValue)} className="save-todo"></span>
            </div>)
      } else {
         element = (
            <div className="todo-view">
               <span
                  onClick={onClick}
                  className="name-todo"
                  style={{ textDecoration: completed ? 'line-through' : 'none' }}>{this.state.myValue}</span>
               <span onClick={this.handleClick} className="edit-todo"></span>
               <span onClick={onDelete} className="delete-todo"></span>
            </div>)
      }

      return (
          <li>
             {element}
          </li>
      )
   }
}
