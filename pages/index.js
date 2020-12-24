import Layout from '@/components/Layout'
import Search from '@/components/Search'

export default function Homepage() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold text-center">Fast Reddit</h1>
      <Search />
    </Layout>
  )
}
