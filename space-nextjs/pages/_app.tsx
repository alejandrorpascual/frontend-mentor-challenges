import Layout from '@/components/layout'
import GlobalStyles from '@/globals/styles'
import {AppProps} from 'next/app'

export default function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
