import React from "react";

const TodoList = ({todos,handleCompleted}) => {
    console.log(todos);
    return(
        <ul>
       {todos.map(todo => (
           <li key={todo.title}>
               <input type='checkbox' checked={todo.done} onChange ={() => {
                    handleCompleted(todo.id)
                }}/>
               <div style={{textDecoration: todo.done ? "line-through": ""}}> {todo.title}</div>
               
               </li>
       ))}
        
        </ul>
    )
}


export default TodoList