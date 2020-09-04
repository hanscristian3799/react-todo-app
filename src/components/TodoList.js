import React, {useEffect} from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { addTodo, showCompleted, showUncompleted, getTodos, setMode } from '../redux/todo/actions'

const TodoList = (props) => {
    useEffect(() => {
        switch(props.mode) {
            case "all" :
                props.getAll();
            break;
            case "completed" :
                props.showCompleted();
            break;
            case "uncompleted" :
                props.showUncompleted();
            break;
        }
    }, [props.mode]);

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {props.todos.map(todo => (
                    <Todo key={todo.id} todo={todo}/>
                ))}
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        mode: state.mode,
        todos: state.filteredList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showCompleted: () => dispatch(showCompleted()),
        showUncompleted: () => dispatch(showUncompleted()),
        getAll: () => dispatch(getTodos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
