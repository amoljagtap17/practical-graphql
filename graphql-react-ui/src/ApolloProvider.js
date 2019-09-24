import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider as ApolloProviderHooks } from '@apollo/react-hooks'

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

const ApolloProvider = ({ children }) => (
  <ApolloProviderHooks client={client}>{children}</ApolloProviderHooks>
)

export default ApolloProvider
