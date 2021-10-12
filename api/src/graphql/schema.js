import { gql } from 'apollo-server-express';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { merge } from 'lodash'
import { PhoneBookEntry, phoneBookEntryResolvers } from './phonebookEntry';

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