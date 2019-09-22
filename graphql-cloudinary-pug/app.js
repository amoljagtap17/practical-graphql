require('dotenv').config()
const express = require('express')
const multer = require('multer')
const { ApolloServer, gql } = require('apollo-server-express')

const models = require('./models')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

const routes = require('./routes')

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage })

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

app.set('view engine', 'pug')
app.set('views', `${__dirname}/public`)

app.get('/', routes.index)
app.get('/user/:id', routes.userinfo)
app.post(
  '/upload',
  upload.fields([{ name: 'file' }, { name: 'id' }]),
  routes.upload
)

app.listen({ port: PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
)
