import React, { Component, useState } from 'react';
import { Button,Badge } from 'reactstrap';
import styled from "styled-components"


const Todo =({text, completed, item, todo, setTodo}) => {
   const [complete, setComplete] = useState(completed)
    const DeleteHandler = () =>{
        setTodo((todo.filter((el) => el.id !== item.id)))
        
    }
    const CompleteHandler = () =>{
        setComplete(completed)
        setTodo(todo.map((items) =>{
            if(items.id === item.id){
                return{
                    ...items,
                     completed: !items.completed,
                };
            }
           return items
        }))
    }

        return (
            <Todos>
           
              <p>{text}</p>
           
            <Button color="danger" onClick={DeleteHandler}>Delete</Button>
            <Button className="btn btn-success m-3" onClick={CompleteHandler} >{complete ? "Completed" : "Not Done"}</Button>
         </Todos>
        );
    }

const Todos = styled.div`
    border: 2px solid palevioletred;
    margin: 5px;
    padding: 10px;
    width: 50%;
    font-family: Georgia, 'Times New Roman', Times, serif;
   
`;

export default Todo;