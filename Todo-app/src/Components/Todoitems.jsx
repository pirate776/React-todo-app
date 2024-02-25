import styles from './todoitems.module.css';
export default function Todoitems ({item}) {

    function handleDelete({item}){
        console.log("delete button clicked");
    }
    return (  
        <div className={styles.item}>
            <div className={styles.itemName}>{item}
            <span>
                <button onclick ={() => handleDelete(item)} className={styles.deleteButton}>X</button>
            </span>
            </div>
            <hr className={styles.horizontal}></hr>
        </div>
    )
}