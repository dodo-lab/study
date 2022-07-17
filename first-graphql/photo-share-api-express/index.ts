import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import fs from 'fs';
import expressPlayground from 'graphql-playground-middleware-express';
import { resolvers } from './resolvers';

const typeDefs = fs.readFileSync('./graphql/typeDefs.graphql', 'utf-8');

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
