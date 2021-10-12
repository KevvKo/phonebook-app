const { gql } = require('apollo-server-express');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { merge, filter } = require('lodash')
const { filterArray } = require('../assets/utils');
const { PhoneBookEntry, phoneBookEntryResolvers } = require('./phonebookEntry');
const phoneBook = require('../assets/data/telefonbuch.json');

const Query = gql`

type Query{
  phoneBookEntrys( query: String! ): [PhoneBookEntry!]
}`

const queryResolvers = {
  Query: {
    phoneBookEntrys: async (parent, args, context) => {
      const { query } = args;
      return filterArray( phoneBook, query );
    }
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