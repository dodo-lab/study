const expressPlayground =
  require('graphql-playground-middleware-express').default;
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const fs = require('fs');

const typeDefs = fs.readFileSync('./typeDefs.graphql', 'utf-8');
const resolvers = require('./resolvers');

async function main() {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();

  server.applyMiddleware({ app });

  app.get('/', (req, res) => res.end('Welcome to the PhotoShare API'));
  app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

  // Webサーバーを起動
  app.listen({ port: 4000 }, () => {
    console.log(
      `GraphQL Service running @ http://localhost:4000${server.graphqlPath}`
    );
    console.log(`GraphQL Playground @ http://localhost:4000/playground`);
  });
}

main();
