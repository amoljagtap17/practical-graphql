require('dotenv').config()

const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const cors = require('cors')
const jwt = require('jsonwebtoken')

const models = require('./models')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

const app = express()
const PORT = process.env.SERVER_PORT || 4000

const getLoggedInUser = req => {
  const token = req.headers['x-auth-token']

  if (token) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
      throw new Error('Session expired')
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    models,
    secret: process.env.JWT_SECRET,
    me: getLoggedInUser(req)
  })
})

server.applyMiddleware({ app })

app.use(cors())

app.listen({ port: PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
)
