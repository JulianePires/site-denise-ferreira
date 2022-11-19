import type {AppProps} from 'next/app'
import {ApolloProvider} from '@apollo/client'
import {cliente} from '@services/cliente'
import EstiloGlobal from '@styles/global'

export default function App({Component, pageProps}: AppProps) {
  return (
    <ApolloProvider client={cliente}>
      <Component {...pageProps} />
      <EstiloGlobal />
    </ApolloProvider>
  )
}
