import './App.css';
import List from './components/List';
import Footer from './components/Footer';
import { React } from 'react';
import './index.css'
import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';


function App() {
  const [todos, setTodos] =  useState(() => {
    const todo = localStorage.getItem("todos");
    return todo ? JSON.parse(todo) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  
  const onChangeInput = (e) => {
    e.preventDefault();
  }

  const onKeyPress = (e) => {
    if(e.key === "Enter") {
      e.preventDefault();
      setTodos([...todos, { id: uuid(), content: e.target.value, isCompleted: false, editing: false }]);
      e.target.value = ""
    }
  }

  const [toShow, setToShow] = useState("all");

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1> todos</h1>
          <form onChange={ onChangeInput }>
            <input className="new-todo" placeholder="What needs to be done?" autoFocus 
            onKeyPress={ onKeyPress }></input>
          </form>
        </header>
        <List todos = { todos } setTodos = { setTodos } toShow={ toShow }/>
        <Footer todos = { todos } setTodos = { setTodos } toShow={ toShow } setToShow={ setToShow } />
      </section>
    </>
  );
}

export default App;
