import React from 'react'
import { v4 as uuidv4 } from 'uuid';

function Form({setInputText, setTodos, todos, inputText, setStatus}) {
    const inputTextHandler = (e) =>{
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) =>{
        e.preventDefault();
        setTodos([...todos, {text: inputText, completed: false, id: uuidv4()}])
        setInputText("")
    }
    const statusHandler = (e) =>{
        setStatus(e.target.value)
    }
    return (
        <div>
            <form>
                <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
                    <button onClick={submitTodoHandler} className="todo-button" type="submit">
                        <i class="fas fa-plus-square"></i>
                    </button>
                <div className="select">
                    <select onChange={statusHandler} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Form
