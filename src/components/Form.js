import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addTodo, showCompleted, showUncompleted, getTodos, setMode } from '../redux/todo/actions'

const Form = (props) => {
    const[inputText, setInputText] = useState('');
    
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    
    const sumbitTodoHandler = (e) => {
        e.preventDefault();

        if(inputText === "") return;

        props.addTodo(inputText);
        

        setInputText('');
        props.setMode('all');
    }

    const statusHandler = (e) => {
        props.setMode(e.target.value);
    }

    return (
        <form>
            {/* <h1>{ props.todos }</h1> */}
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={sumbitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
            <select onChange={statusHandler} value={props.mode} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
            </div>
        </form>
    );
}

const mapStateToProps = (state) => {
    return {
        todos: state.filteredList,
        mode: state.mode
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (name) => dispatch(addTodo(name)),
        showCompleted: () => dispatch(showCompleted()),
        showUncompleted: () => dispatch(showUncompleted()),
        getAll: () => dispatch(getTodos()),
        setMode: (mode) => dispatch(setMode(mode)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
