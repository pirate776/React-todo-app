import Form from "./Form";
import { useState } from "react";
import TodoList from "./TodoList";
export default function Todo(){
    const[Todos,setTodos] = useState([]);
    return (
        <div>        
           <Form Todos = {Todos} setTodos = {setTodos} />
           <TodoList Todos = {Todos} /> 
        </div>

    )
}