import Image from 'next/image'
import Link from 'next/link'
import TodoList from '../../components/TodoList'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import styles from '../../styles/styles.module.css'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase-config'

export default function Todos({todos}) {
  return (
    <Layout>
      <Header title='Create Next App' />
      <Link href='/create_list'><a className={styles.back}>create a todo test</a></Link>
      {/* <TodoList todos={todos} /> */}
      {todos.map(todo => {
          return (
            <div key={todo.id} className={styles.itembox}>
                <Link href={`/todo/${todo.id}`}><a className={styles.title}>{todo.title}</a></Link>
                <p className={styles.text}>{todo.body}</p>
            </div>
          )
      })}

      <footer>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />  
      </footer>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const todolist = await getDocs(collection(db, 'posts'))
  const todos = todolist.docs.map(todo => ({...todo.data(), id: todo.id}))
  console.log(todos)
  // console.log(context.query)

  return {
    props: {
      todos
    }
  }
}