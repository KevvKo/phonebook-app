const { gql } = require('apollo-server-express');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { merge } = require('lodash')
const { PhoneBookEntry, phoneBookEntryResolvers } = require('./phonebookEntry');

const Query = gql`

type Query{
  phoneBookEntry: PhoneBookEntry!
}`

const queryResolvers = {
  Query: {
    phoneBookEntry: async (parent, args, context) => {}
  }
}

const schema = makeExecutableSchema( {
  typeDefs: [Query, PhoneBookEntry],
  resolvers: merge(
    queryResolvers,
    phoneBookEntryResolvers
  )
});

module.exports = {
  schema
}