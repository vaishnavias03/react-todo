import React, {useState, useEffect} from 'react'
import './App.css';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';

function App() {
  //for the input reading from text box
  const [input, setInput] = useState("");
  //for the todo list updating
  const [todo, setTodo] = useState([]);
  //to check the category of the todo 
  const [status, setStatus] = useState('all')
  //after checking the todo will be added to the corresponding category
  const [filter, setFilter] = useState([])

  //whenever there is a change in the status of the todos(category) then this useffect will run and call the filterHandler()
  useEffect(() =>{
    filterHandler()
    // saveLocalTodos();
    }, [todo, status])

    // useEffect(()=>{
    //   getTodos();
    // },[])

  //As the category is switched a filter is perfomed on the todos and based on that they will be added to the filter
  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilter(todo.filter((items) => items.completed === true))
        break
      case 'uncompleted':
        setFilter(todo.filter((items) => items.completed === false))
        break
      default:
        setFilter(todo)

    }
  }
  // const getTodos = () =>{
    
  //     localStorage.setItem('todo', JSON.stringify(todo))
  //   }
  
  // const saveLocalTodos = () =>{
  //   if(localStorage.getItem('todo') === null){
  //     localStorage.setItem('todo', JSON.stringify([]));
  //   }
  //   else{
  //      let todoLocal = JSON.parse(localStorage.getItem("todo"))
  //      setTodo(todoLocal)
  //   }
  // }
  
  return (
      <div className="App-header">
        <h1>Todo App</h1><br/>
        <TodoForm setInput={setInput} todo={todo} setTodo={setTodo} input={input} setStatus={setStatus} /><br/>
        <TodoList todo={todo}  setTodo={setTodo} filter={filter}/><br/>
      </div>
  );
}

export default App;
