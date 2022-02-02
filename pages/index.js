import Image from 'next/image'
import Link from 'next/link'
import TodoList from '../components/TodoList'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Header title='Create Next App' />
      <Link href='/create_list'><a>create a todo</a></Link>
      <TodoList />
      <footer>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />  
      </footer>
    </div>
  )
}