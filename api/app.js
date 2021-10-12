'use strict';

const { ApolloServer } = require('apollo-server');
const      { schema } = require('./src/graphql/schema');

async function startServer(){

  const server = new ApolloServer({
    schema: schema
  })

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
  });
}

startServer();