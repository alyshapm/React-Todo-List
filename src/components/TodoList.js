import React, {useState, useEffect} from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo'
import { v4 as uuidv4 } from 'uuid';
uuidv4();

export const TodoList = () => {
    const [todoList, setTodoList] = useState([])

    // add
    const addTodo = todo => {
        setTodoList([...todoList, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todoList)
    }

    // filtering
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

    const filterTodo = () => {
        switch(status){
            case "completed":
                setFilteredTodos(todoList.filter(todo => todo.completed === true));
                break;
            case "uncompleted":
                setFilteredTodos(todoList.filter(todo => todo.completed === false));
                break;
            default:
                setFilteredTodos(todoList);
                break;
        }
    }

    useEffect(() => {
        filterTodo();
    }, [todoList, status]);

    // delete
    const deleteTodo = id => {
        setTodoList(todoList.filter(todo => todo.id !== id))
    };

    // complete
    const completeTodo = id => {
        setTodoList(todoList.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    };

  return (
    <div className="TodoList">
        <TodoForm
        addTodo={addTodo}
        setStatus={setStatus}
        // filterTodo={filterTodo}
        />
        {filteredTodos.map((todo, index) => (
            <Todo task={todo} key={index}
            deleteTodo={deleteTodo} completeTodo={completeTodo} filteredTodos={filteredTodos}/>
        ))}     
    </div>
  )
}
