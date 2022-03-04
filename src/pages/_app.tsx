import { AppProps } from 'next/app'
import Head from 'next/head'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '../services/queryClient'
import GlobalStyle from '../styles/global'
import { ReactQueryDevtools } from 'react-query/devtools'

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>React Avançado - Boilerplate</title>
      </Head>
      <GlobalStyle />
      <ReactQueryDevtools initialIsOpen={false} />
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default App
