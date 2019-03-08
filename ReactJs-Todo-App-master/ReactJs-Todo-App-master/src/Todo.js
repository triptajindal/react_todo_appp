import React from 'react'
//({ todos }) is just like let todos = props.todos
//this is object destructuring and we are destructuring the props here 
const Todo = ({ todos, deleteTodo }) => {
    //we want to delete element on which we will click on so for that we need binding {()=>}
    const todoList = todos.length ? todos.map(todo => {
        return (
            <div className='collection-item' key={todo.id}>
                <span onClick={() => { deleteTodo(todo.id) }}>{todo.item}</span>
            </div>
        )
    }
    ) : (
            <p className="center"> Yay! I don't have anything to do !</p>
        )
    return (
        <div className='todos collection'>
            {todoList}
        </div>
    )
}
export default Todo;