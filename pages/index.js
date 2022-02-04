import Image from 'next/image'
import Header from '../components/Header'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  
  useEffect(() => {
    router.push('/todos')
  }, [router])

  return (
    <Layout>
      <Header title='Create Next App' />
      <Link href='/create_list'><a className={styles.back}>create a todo!!!!!</a></Link>
      <TodoList todos={todos} />
      <footer>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />  
      </footer>
    </Layout>
  )
}