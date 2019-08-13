import React, { Component } from 'react'
import InputMask from 'react-input-mask'

export default class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isCorrectDate: true,
            value: ''
        };

        this.onCheckDate = this.onCheckDate.bind(this);
    }

    componentWillUpdate(param) {
        console.log('param', param);
    }

    onCheckDate = (event) => {
        this.setState({
            isCorrectDate: new Date(event.target.value) != 'Invalid Date',
            value: event.target.value
        });

        this.props.getData(event.target.value);
    };

    render() {
        return (
            <span className="position-relative">
                <InputMask
                    placeholder='Date of completion'
                    mask="99/99/9999"
                    maskChar=" "
                    onBlur={this.onCheckDate} />
                <span className={ this.state.isCorrectDate ? 'add-todo__tooltip-hide' : 'add-todo__tooltip' }>
                    Incorrect number
                </span>
            </span>
        )
    }
}
