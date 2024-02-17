import { useState } from "react";
import Todoitems from "./Todoitems";
export default function Todo(){
    const[Todo,setTodo] = useState("");
    const[Todos,setTodos] = useState([]);


    function handleSubmit(e){
      e.preventDefault();
      setTodos([...Todos,Todo])
      setTodo("");
    }
    return (
        <div>        
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setTodo(e.target.value) } value={Todo} type = "text"></input>
                <button type="submit"> Add </button>
            </form>
            {Todos.map((item)=>
                ( <Todoitems item = {item} />))} 
        </div>

    )
}