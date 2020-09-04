import React from 'react';
import { deleteTodo, finishTodo, setMode } from '../redux/todo/actions';
import { connect } from 'react-redux';

const Todo = (props) => {

    const deleteHandler = () => {
        props.deleteTodo(props.todo.id);
        props.setMode("all");
    };

    const completedHandler = () => {
        props.finishTodo(props.todo.id);
        props.setMode("all");
    };

    return (
        <div className="todo">
            <li className={`todo-item ${props.todo.completed === true ? 'completed' : ''}`}>{props.todo.name}</li>
            <button onClick={completedHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (id) => dispatch(deleteTodo(id)),
        finishTodo: (id) => dispatch(finishTodo(id)), 
        setMode: (mode) => dispatch(setMode(mode))
    }
}

export default connect(null, mapDispatchToProps)(Todo);
