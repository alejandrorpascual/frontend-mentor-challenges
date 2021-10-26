import Layout from '@/components/layout'
import GlobalStyles from '@/globals/styles'
import {AppProps} from 'next/app'
import {useRouter} from 'next/dist/client/router'

export default function MyApp({Component, pageProps}: AppProps) {
  const {pathname} = useRouter()

  return (
    <>
      <GlobalStyles />
      <Layout pathname={pathname}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
