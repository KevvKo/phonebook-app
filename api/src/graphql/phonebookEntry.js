const { gql } = require('apollo-server');

const PhoneBookEntry = gql`

type PhoneBookEntry {
  name: String!
  phoneNumber: String
}`

const phoneBookEntryResolvers = {}

module.exports = {
  PhoneBookEntry,
  phoneBookEntryResolvers
};