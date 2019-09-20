const { gql } = require('apollo-server-express')

// Mutation default is not needed!

module.exports = gql`
  type Query {
    _: Boolean
  }
`
