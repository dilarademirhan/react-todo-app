import React from 'react'


function ListItem({ todos, setTodos, todo }) {

    const onKeyPress = (e) => {
        if(e.key === "Enter" ) {
            e.preventDefault();
            setTodos (todos.map((item) => {
                if (item.id === todo.id) {
                item.content = e.target.value
                item.editing = false
                }
                return item;
            }))
        }
    }

    const onFocusOut = (e) => {
        setTodos (todos.map((item) => {
            if (item.id === todo.id) {
              item.content = e.target.value
              item.editing = false
            }
            return item;
        }))
    }

    const onClickLabel = (id) => {
        setTodos (todos.map((item) => {
            if (item.id === id) {
                item.editing = true
            }
            return item;
        }))
    }   

    if (todo.editing) {
        return (
            <>
            <input className="new-todo" defaultValue={ todo.content } onKeyPress={ onKeyPress } onBlur={ onFocusOut }/>
            </>
        )
    } else {
        return (
            <>
                <label onClick={() => onClickLabel(todo.id) }> {todo.content} </label>  
            </>
        )
        
    }
}

export default ListItem