import styles from './todoitems.module.css';
export default function Todoitems ({item}) {
    return (  
        <div className={styles.item}>
            <div className={styles.itemName}>{item}
            <span>
                <button className={styles.deleteButton}>X</button>
            </span>
            </div>
            <hr className={styles.horizontal}></hr>
        </div>
    )
}