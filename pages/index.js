import Layout from '@/components/Layout'
import Search from '@/components/Search'

function Home() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold">Fast Reddit</h1>
      <Search />
    </Layout>
  )
}

export default Home
