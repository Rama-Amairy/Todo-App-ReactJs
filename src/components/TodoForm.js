import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : (""));
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus();
    });


    const onChangeHandel = e => {
        setInput(e.target.value);
    }
    const formHandel = e => {
        e.preventDefault();
        props.addToList({
            id: Math.floor(Math.random() * 10000),
            text: input

        })
        setInput('');
    }
    return (
        <form classname="todo-form" onSubmit={formHandel}>
            {props.edit ? (
                <>
                    <input className="todo-input edit"
                        placeholder="update your item"
                        type="text"
                        value={input}
                        onChange={onChangeHandel}
                        ref={inputRef}
                    >
                    </input>
                    <button className='todo-button edit'>Update</button>
                </>
            ) : (
                <>
                    <input className="todo-input"
                        placeholder="Add your task"
                        type="text"
                        value={input}
                        onChange={onChangeHandel}
                        ref={inputRef}
                    >
                    </input>
                    <button className='todo-button'>Add todo</button>
                </>
            )}

        </form>
    )
}

export default TodoForm
