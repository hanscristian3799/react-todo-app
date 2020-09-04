import React from 'react';

const Todo = ({todo, setTodos, todos}) => {

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    };

    const completedHandler = () => {
        setTodos(todos.map(el  => {
            if(el.id === todo.id) {
                return {...el, completed: !el.completed};
            }
            return el;
        }));
    };

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed === true ? 'completed' : ''}`}>{todo.name}</li>
            <button onClick={completedHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo;
