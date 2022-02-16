import React from 'react';
import ListItem from './ListItem';


function List({ toShow, todos, setTodos }) { 

  const filtered = () => {
    if (toShow === "all") {
      return todos
    } else if (toShow === "active") {
      return todos.filter((todo) => !todo.isCompleted)
    } else if (toShow === "completed") {
      return todos.filter((todo) => todo.isCompleted)
    }
  }

  const onClickDestroy = (id) => {
    setTodos( [...todos].filter(todo => todo.id !== id))
  }

  const onClickComplete = id => {
    setTodos (todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted 
      }
      return todo;
      }))
  }

  
  const onClickMarkAll = () => {
		setTodos(todos.map((todo) => {
      return {
        ...todo, isCompleted: true
      }
  }))
	}

  return (
    <>
      <section className="main">
      <input className="toggle-all" type="checkbox" />
		  <label htmlFor="toggle-all" onClick={ onClickMarkAll }>
			Mark all as complete
		  </label>
      <ul className="todo-list">
          { filtered().map((todo, i) => 
          <li className={ todo.isCompleted ? "completed" : "" } key={i}>
            <div className="view">
              <input onChange={ () => onClickComplete(todo.id) } className="toggle"  checked={ todo.isCompleted } type="checkbox" />
              <ListItem todos = { todos } setTodos = { setTodos } 
              todo = {todo} />
              <button className="destroy" onClick={ () => onClickDestroy(todo.id) }/>
            </div>
          </li>
          )}
      </ul>
      </section>
    </>
  );
}

export default List;
