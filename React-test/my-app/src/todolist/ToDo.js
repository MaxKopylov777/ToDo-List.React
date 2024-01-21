import { useState } from 'react'
import pencilIcon from '../assets/icons/design-pencil.svg'
import trashIcon from '../assets/icons/trash.svg'

const Todo = ({todo, update, remove, toogleComplete}) => {

const [isEditing, setIsEditing] = useState(false)
const [task, setTask] = useState(todo.task)


    const handleClick = () => {
        setIsEditing(!isEditing)
}

    const editTask = (event) => {
        setTask(event.target.value)
    }

    const saveNewTodo = (event) => {
        event.preventDefault()

        update(todo.id, task)
        setIsEditing(!isEditing)
    }

    const handleDelete = () => {
        remove(todo.id)
    }

    const handleCompleted = () => {
        toogleComplete(todo.id)
    }

    let result;

    if (!isEditing) {
    result = (
        <div className='Todo'>
            <span onClick={handleCompleted}
            className = {todo.completed ? 'Todo-task completed'
            : 'Todo-task'}
            >{todo.task}</span>
            <div>
                <img src = {pencilIcon}
                onClick = {handleClick}
                className='IconSvg'
                 />
                <img src = {trashIcon}
                onClick = {handleDelete}
                className='IconSvg'
                 />
            </div>
        </div>)
    } else {
        result = (
            <div className='Todo'>
                <form onSubmit={saveNewTodo}>
                    <input
                    className="InputEdit"
                    onChange={editTask} 
                    value = {task}/>
                    <button className='Save-Todo'>save</button>
                </form>
            </div>)
    }

    return result
}

export default Todo;