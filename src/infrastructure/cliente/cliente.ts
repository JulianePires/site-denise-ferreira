import {ApolloClient, InMemoryCache} from '@apollo/client'

export const cliente = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_URI_APOLLO_CLIENT,
  cache: new InMemoryCache(),
})
