import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { cliente } from '@services/client';
import GlobalStyle from '@styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={cliente}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ApolloProvider>
  );
}
