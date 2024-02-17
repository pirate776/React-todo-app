import {useState} from 'react';
export default function Form({Todos,setTodos}){
    const[Todo,setTodo] = useState("");
   
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...Todos,Todo])
        setTodo("");
      }
     
  
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setTodo(e.target.value) } value={Todo} type = "text"></input>
                <button type="submit"> Add </button>
            </form>
        </div>
        )
}