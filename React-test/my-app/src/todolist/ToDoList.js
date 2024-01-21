import React from 'react'
import { useState } from 'react'
import Todo from './ToDo'
import './styles/ToDo.css'
import NewToDoForm from './NewToDoForm' 
import uuid from 'react-uuid';
import Header from './Header'

const ToDoList = ()=> {

    const [todos, setTodos] = useState(

        [
            {id: uuid(), task: 'помыть посуду', completed: false},
            {id: uuid(), task: 'полить цветы', completed: false},
            
        ])
    
    const toogleComplete = (id) => {
        const updateTodos = todos.map(todo => {
            if(todo.id === id) {
                return {...todo, completed: !todo.completed}
            }
            return todo;
        });
        setTodos(updateTodos)
    }
    
    
    const create = (newTodoObj) => {
        setTodos([...todos, newTodoObj]) 
    }   
 
    const remove = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const update = (id, newTask) =>{
        let updateTodos = todos.map(todo => {
            if(todo.id === id){
                return {...todo,task: newTask}
            }
            return todo;
        })

        setTodos(updateTodos)
    }

    const todoList = todos.map(todo => (
        <Todo 
            update = {update}
            remove = {remove}
            key = {todo.id}
            toogleComplete = {toogleComplete}
            todo = {todo} />
    ))


    return (
        <div className='ToDoList-container'>
            <Header/>
            {todoList}
            <div>
                <NewToDoForm create = {create}/>  
            </div>
        </div>
    )
}

export default ToDoList