import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import fetch from 'cross-fetch'

const uri = process.env.NEXT_PUBLIC_URI_APOLLO_CLIENT

export const cliente = new ApolloClient({
  link: createHttpLink({
    uri,
    fetch
  }),
  cache: new InMemoryCache(),
})
