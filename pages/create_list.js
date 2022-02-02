import Header from "../components/Header"
import Link from "next/link"
import Layout from "../components/Layout"
import styles from '../styles/styles.module.css'


const CreateList = () => {
    console.log(styles)
    return (
        <Layout>
            <Header title='create a todo' />
            <Link href='/'><a className={styles.back}>go back to all todolist</a></Link>
            <div className={styles.formContainer}>
                <label>create title</label>
                <input type='text' placeholder="enter title" />
            </div>
            <div>
                <label>create content</label>
                <input type='text' placeholder="enter title" />
            </div>
        </Layout>
    )
}

export default CreateList