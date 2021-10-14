const { gql } = require('apollo-server-express');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { merge } = require('lodash')
const { filterArray } = require('../assets/utils');
const { PhoneBookEntry } = require('./phonebookEntry');
const phoneBook = require('../assets/data/telefonbuch.json');

const Query = gql`

type Query{
  PhoneBookEntrys( query: String! ): [PhoneBookEntry!]
}`

const queryResolvers = {
  Query: {
    PhoneBookEntrys: async (parent, args, context) => {
      const { query } = args;
      return filterArray( phoneBook, query );
    }
  }
}

const schema = makeExecutableSchema( {
  typeDefs: [Query, PhoneBookEntry],
  resolvers: merge(
    queryResolvers
  )
});

module.exports = {
  schema
}