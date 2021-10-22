import Layout from '@/components/layout'

function HomePage() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

HomePage.getLayout = function getLayout() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  )
}

export default HomePage
