import React, { Component } from 'react'
class TodoAdd extends Component {
    state = {
        item: null
    }

    handleChange = (e) => {
        this.setState({
            item: e.target.value
            //[e.target.id]: e.target.value
        })
    }
    //since this is a class component so we will not write this.prop
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTask(this.state)
        this.setState({
            item: ''
        })
    }
    render() {
        return (
            <form className='center' onSubmit={this.handleSubmit}>
                <div className='input-field inline'>
                    <input type='text' id='item' placeholder='Enter the Task' onChange={this.handleChange} value={this.state.item} />
                </div>
                <button className='btn-floating btn-large waves-effect waves-light blue'><i className="material-icons">+</i></button>
            </form>
        );
    }
}
export default TodoAdd;