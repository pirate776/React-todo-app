import Todoitems from "./Todoitems";
export default function TodoList({Todos}){
    return( 
   <div>
        {Todos.map((item)=>
            ( <Todoitems key={item}   item = {item} />))} 
    </div>
    )
} 