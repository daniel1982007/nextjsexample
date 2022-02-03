import Image from 'next/image'
import Link from 'next/link'
import TodoList from '../components/TodoList'
import Header from '../components/Header'
import Layout from '../components/Layout'
import styles from '../styles/styles.module.css'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase-config'

export default function Home({todos}) {
  return (
    <Layout>
      <Header title='Create Next App' />
      <Link href='/create_list'><a className={styles.back}>create a todo</a></Link>
      <TodoList todos={todos} />
      <footer>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />  
      </footer>
    </Layout>
  )
}

export async function getServerSideProps() {
  const todolist = await getDocs(collection(db, 'posts'))
  const todos = todolist.docs.map(todo => ({...todo.data(), id: todo.id}))
  console.log(todos)

  return {
    props: {
      todos
    }
  }
}