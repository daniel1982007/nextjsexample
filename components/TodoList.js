import Link from "next/link"
import styles from '../styles/styles.module.css'

const TodoList = ({todos})  => {
    return (
        todos.map(todo => {
            return (
                <div key={todo.id} className={styles.itembox}>
                    <Link href={`/todo/[id]`}><a className={styles.title}>{todo.title}</a></Link>
                    <p className={styles.text}>{todo.body}</p>
                </div>
            )
        })
    )
}

export default TodoList