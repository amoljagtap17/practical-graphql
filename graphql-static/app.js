const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')

const models = require('./models')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

const app = express()
const PORT = process.env.SERVER_PORT || 4000
const me = models.users[0]

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    models,
    me
  }
})

server.applyMiddleware({ app })

app.listen({ port: PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
)
