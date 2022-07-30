import { ApolloServer } from 'apollo-server-express';
import { config } from 'dotenv';
import express from 'express';
import fs from 'fs';
import expressPlayground from 'graphql-playground-middleware-express';
import { Db, MongoClient } from 'mongodb';
import { PhotoCategory } from './graphql/generated/resolvers';
import { DbPhoto, DbUser } from './mongo-db/types';
import { resolvers } from './resolvers';

config();

const typeDefs = fs.readFileSync('./graphql/typeDefs.graphql', 'utf-8');

async function initializeDbData(db: Db) {
  const users = db.collection<DbUser>('users');
  if ((await users.estimatedDocumentCount()) <= 0) {
    await users.insertMany([
      { githubLogin: 'mHattrup', name: 'Mike Hattrup' },
      { githubLogin: 'gPlake', name: 'Glen Plake' },
      { githubLogin: 'sSchmidt', name: 'Scot Schmidt' },
    ]);
  }
  const photos = db.collection<DbPhoto>('photos');
  if ((await photos.estimatedDocumentCount()) <= 0) {
    await photos.insertMany([
      {
        name: 'Dropping the Heart Chute',
        description: 'The heart chute is one of my favorite chutes',
        category: PhotoCategory.Action,
        githubUser: 'gPlake',
        created: '3-28-1977',
      },
      {
        name: 'Enjoying the sunshine',
        category: PhotoCategory.Selfie,
        githubUser: 'sSchmidt',
        created: '1-2-1985',
      },
      {
        name: 'Gunbarrel 25',
        description: '25 laps on gunbarrel today',
        category: PhotoCategory.Landscape,
        githubUser: 'sSchmidt',
        created: '2018-04-15T19:09:57.308Z',
      },
    ]);
  }
}

async function start() {
  const app = express();

  const MONGO_DB = process.env.DB_HOST;

  const client = await MongoClient.connect(MONGO_DB!);
  const db = client.db();
  await initializeDbData(db);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
      const githubToken = req.headers.authorization;
      const currentUser = githubToken
        ? await db.collection<DbUser>('users').findOne({ githubToken })
        : null;
      return { db, currentUser };
    },
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
    console.log(
      `Github authorize @ https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
    );
  });
}

start();
