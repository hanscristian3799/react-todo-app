import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>

      <Provider store={store}>
        <Form/>
        <TodoList/>
      </Provider>
    </div>
  );
}

export default App;
