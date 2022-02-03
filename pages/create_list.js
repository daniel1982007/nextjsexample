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
            <form class={styles.formFields}>
                <div className={styles.field}>
                    <label className={styles.block}>title</label>
                    <input type='text' placeholder="enter title" />
                </div>
                <div className={styles.field}>
                    <label className={styles.block}>content</label>
                    <input type='text' placeholder="enter content" />
                </div>
                <button className={styles.btn}>submit</button>
            </form>
        </Layout>
    )
}

export default CreateList