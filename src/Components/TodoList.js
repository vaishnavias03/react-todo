import React, { Component } from 'react';
import Todo from "./Todo"

const TodoList =({todo, setTodo, filter }) => {
    console.log(todo)
    return (
       <div className="todo-container">
           <ul className="todo-list">
             {filter.map((item) =>{
                   return(
                    <Todo  key={item.id} text={item.text} setTodo={setTodo} todo={todo} item={item} completed={item.completed}/>
                   )
                
             })}  
           </ul>
       </div>
    );
}


export default TodoList;