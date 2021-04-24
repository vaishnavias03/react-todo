import React, { Component } from 'react';
import { Button, Input, Form } from 'reactstrap';

const TodoForm = ({props, input, setInput, todo, setTodo, setStatus}) =>{
    //value from the text box is passed as e
    const InputHandler = (e) =>{
        setInput(e.target.value)
    }
    //when submitted the todo is passed inside
    const SubmitHandler = (e) =>{
        e.preventDefault();
        setTodo([
            ...todo,
            { id: Math.random(10)*10 , text: input , completed: false}
        ]);
        setInput("")
    }
    const StatusHandler =(e) =>{
       setStatus(e.target.value)
    }
    return (
       <Form row>
           <Input className="sm-2" type="text" value={input} className="todo-input" placeholder="Enter todo" onChange={InputHandler}/>
           <Button className="btn btn-info m-3" type="submit" onClick={SubmitHandler} >Add</Button>
           <div className="select"  onChange={StatusHandler}>
               <select name="todos" className="filter-todos">
                   <option value="all">All</option>
                   <option value="completed">Completed</option>
                   <option value="uncompleted">uncompleted</option>
               </select>
           </div>
       </Form>
    );
 }


export default TodoForm;