import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([]);
    const addTodo = todo => {
        // the input string is regular
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newRow = [todo, ...todos]
        setTodos(newRow);
        // console.log(todo,...todos)
    }
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }
        setTodos(prev => prev.map(item =>
            item.id === todoId ? newValue : item)
        );
    }

    const removeTodo = id => {
        const removeFromList = [...todos].filter(todo => todo.id !== id)
        setTodos(removeFromList)
    }
    const completeTodo = id => {
        let updateTodo = todos.map(todo => {
            if (todo.id === id) { todo.isComplete = !todo.isComplete; }
            return todo
        });
        setTodos(updateTodo);
    }
    return (

        <div>
            <h1>What is your plane Today</h1>
            <TodoForm addToList={addTodo}></TodoForm>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} ></Todo>
        </div>
    )
}

export default TodoList
