import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { cliente } from '@services/client';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={cliente}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
