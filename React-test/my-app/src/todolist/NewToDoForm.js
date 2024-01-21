 import { useState } from "react"
 import uuid from 'react-uuid';
 import './styles/NewToDoForm.css'

const NewToDoForm = ({create}) => {


    const [newTodo, setNewTodo] = useState()
    

    
    const handleChange = (event) => {
        setNewTodo(event.target.value)
    }
    

    const handleSubmit = (event) => {
        event.preventDefault()
        const newTodoObj = {id: uuid(), task:newTodo,completed: false}
        create(newTodoObj)
        setNewTodo(' ')
    }

    return(
        <form onSubmit = {handleSubmit}>
            <input
            className="Input"
            onChange = {handleChange}
            placeholder = "New Todo"
            value={newTodo}
            />
            <button className='Add-todo'>add todo</button>
        </form>
    )
}

export default NewToDoForm;  