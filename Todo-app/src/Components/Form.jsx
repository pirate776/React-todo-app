import {useState} from 'react';
import styles from './form.module.css'
export default function Form({Todos,setTodos}){
    const[Todo,setTodo] = useState("");
   
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...Todos,Todo])
        setTodo("");
      }
     
  
    return(
        <div>
            <form className = {styles.todoform} onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                    <input className={styles.modernInput} onChange={(e) => setTodo(e.target.value) } value={Todo} placeholder='Enter to do item...' type = "text"></input>
                    <button className={styles.modernButton} type="submit"> Add </button>
                </div>
            </form>
        </div>
        )
}