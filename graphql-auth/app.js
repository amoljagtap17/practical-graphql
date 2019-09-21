require('dotenv').config()

const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const cors = require('cors')

const models = require('./models')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

const app = express()
const PORT = process.env.SERVER_PORT || 4000

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    models,
    secret: process.env.JWT_SECRET
  }
})

server.applyMiddleware({ app })

app.use(cors())

app.listen({ port: PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
)
