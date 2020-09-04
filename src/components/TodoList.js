import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, setTodos, filteredList}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredList.map(todo => (
                    <Todo key={todo.id} todo={todo} setTodos={setTodos} todos={todos} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
