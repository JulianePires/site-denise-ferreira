import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl9wriutv02oj01t2fxjg4qi7/master',
  cache: new InMemoryCache(),
});

export default client;
