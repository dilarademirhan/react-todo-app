import React from 'react'

function Footer({ todos, setTodos, toShow, setToShow }) {

    const onClickAll = (e) => {
        setToShow("all")
        return false
    }

    const onClickActive = (e) => {
        setToShow("active")
        return false
    }

    const onClickCompleted = (e) => {
        setToShow("completed")
        return false
    }

    const onClickClearCompleted = () => {
        setTodos (todos.filter((todo) => !todo.isCompleted))
        return false
      }

    return (
        <>
            <footer className='footer'> 
                <span className="todo-count">
                <strong> { todos.filter((todo) => !todo.isCompleted).length } </strong>
                todos left
                </span>

                <ul className="filters">
                    <li>
                        <a className={ toShow === "all" ? "selected" : "" } href onClick={ onClickAll } >All</a>
                    </li>
                    <li>
                        <a className={ toShow === "active" ? "selected" : "" } href onClick={ onClickActive } >Active</a>
                    </li>
                    <li>
                        <a className={ toShow === "completed" ? "selected" : "" } href onClick={ onClickCompleted } >Completed</a>
                    </li>
                </ul>

                <button onClick={ onClickClearCompleted } className="clear-completed">
                Clear completed
                </button>
            
            </footer>
        </>
    )
}

export default Footer