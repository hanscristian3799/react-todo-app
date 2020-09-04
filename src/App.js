import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const[inputText, setInputText] = useState("");
  const[todos, setTodos] = useState([]);
  const[status, setStatus] = useState('all');
  const[filteredList, setFilteredList] = useState([]);

  const filterHandler = () => {
    switch(status) {
      case 'completed': 
        setFilteredList(todos.filter(el => el.completed === true));
      break;
      case 'uncompleted': 
        setFilteredList(todos.filter(el => el.completed === false));
      break;
      default: 
        setFilteredList(todos);
      break;
    }
  }

  useEffect(()=> {
    getLocal();
  }, []);

  useEffect(() => {
    filterHandler();
    saveToLocal();
  }, [todos, status]);

  const saveToLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocal = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodos);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form 
        inputText={inputText} 
        setInputText={setInputText} 
        todos={todos} setTodos={setTodos} 
        setStatus={setStatus} 
      />
      <TodoList todos={todos} setTodos={setTodos} filteredList={filteredList} />
    </div>
  );
}

export default App;
