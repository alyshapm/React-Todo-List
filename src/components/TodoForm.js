import React, { useState } from 'react'

export const TodoForm = ({addTodo, setStatus}) => {
    // set the value to null
    const [value, setValue] = useState("");

    // saves the user input and stores it
    const handleSubmit =  e => {
        // to prevent the page from reloading when submit button is clicked
        e.preventDefault();
        addTodo(value);
        setValue("")
    }

    // filtering
    const handleStatus = e => {
        setStatus(e.target.value);
    }

    return(
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" value={value} placeholder="Add new reminder"
            onChange={(e) => setValue(e.target.value)}/>
            <button typer="submit" className="todo-btn">Add</button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={handleStatus}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Active</option>
                </select>
            </div>
        </form>
    );
}