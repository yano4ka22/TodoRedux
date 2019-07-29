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
      currentName: null,
      currentDescr: null,
      currentDate: null
   }

   componentDidMount() {
      this.setState({
         currentName: this.props.name,
         currentDescr: this.props.description,
         currentDate: this.props.dateComplete
     })
   }

   handleClick = () => {
      this.setState({ editing: true })
   }

   handleSave = (id, text) => {
      if (this.state.currentName.length === 0) {
         this.props.onDelete(id)
      } else {
         this.props.editTodo({id: id, text: this.state.currentName})
      }

      this.setState({
         editing: false,
         currentName: this.state.currentName,
         currentDescr: this.state.currentDescr,
         currentDate: this.state.currentDate
      })
   }

   onChangeHandler = (event) => {
      this.setState({currentName: event.target.value})
   }

   render() {
      const { onClick, onDelete, completed, id } = this.props

      let element;
      if (this.state.editing) {
         element = (
            <div className="todo-view">
               <div class="todo-view__block"
                    style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                  <input
                     className='todo-input'
                     autoFocus
                     value={this.state.currentName} onChange={this.onChangeHandler} />
                  <span
                     className="name-todo">{this.state.currentDescr}</span>
                  <span
                     className="name-todo">{this.state.currentDate}</span>
               </div>
               <span onClick={(currentName) => this.handleSave(id)} className="save-todo"></span>
            </div>)
      } else {
         element = (
            <div className="todo-view">
               <div class="todo-view__block"
                    style={{ textDecoration: completed ? 'line-through' : 'none' }}
                    onClick={onClick}>
                  <span className="name-todo">{this.state.currentName}</span>
                  <span className="name-todo">{this.state.currentDescr}</span>
                  <span className="name-todo">{this.state.currentDate}</span>
               </div>
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
