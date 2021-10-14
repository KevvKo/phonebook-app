const { gql } = require('apollo-server');

const PhoneBookEntry = gql`

type PhoneBookEntry {
  name: String!
  phone: String
}`

module.exports = {
  PhoneBookEntry,
};