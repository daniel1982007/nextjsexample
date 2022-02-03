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
      <Header title='home page' />
      <footer>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />  
      </footer>
    </Layout>
  )
}