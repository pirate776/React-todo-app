import Todoitems from "./Todoitems";
import styles from './todolist.module.css';
export default function TodoList({Todos}){
    return( 
   <div className={styles.list}>
        {Todos.map((item)=>
            ( <Todoitems key={item}   item = {item} />))} 
    </div>
    )
} 