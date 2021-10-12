'use strict';

import { ApolloServer } from 'apollo-server';
import { schema } from './src/graphql/schema';

async function startServer(){

  const server = new ApolloServer({
    schema: schema
  })

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
  });
}

startServer();