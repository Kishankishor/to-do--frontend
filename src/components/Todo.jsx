import React from 'react'


export const Todo = ({text , updateMode ,deleteTodo }) => {
  return (
   <div className="todo">
    <div className="text">{text}</div>
    <div className="icons">
        <button className="icon" onClick={updateMode} >update</button>
        <button className="icon"  onClick={deleteTodo}>delete</button>
    </div>
   </div>
  )
}
