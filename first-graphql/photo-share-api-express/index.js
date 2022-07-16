const expressPlayground =
  require('graphql-playground-middleware-express').default;
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const { GraphQLScalarType } = require('graphql');

const typeDefs = `
  enum PhotoCategory {
    SELFIE
    PORTRAIT
    ACTION
    LANDSCAPE
    GRAPHIC
  }

  type User {
    githubLogin: ID!
    name: String
    avatar: String
    postedPhotos: [Photo!]!
    inPhotos: [Photo!]!
  }

  scalar DateTime
  type Photo {
    id: ID!
    url: String!
    name: String!
    description: String
    category: PhotoCategory
    postedBy: User!
    taggedUsers: [User!]!
    created: DateTime!
  }

  input PostPhotoInput {
    name: String!
    category: PhotoCategory=PORTRAIT
    description: String
  }

  type Query {
    totalPhotos: Int!
    allPhotos(after: DateTime): [Photo!]!
  }

  type Mutation {
    postPhoto(input: PostPhotoInput!): Photo!
  }
`;

const tags = [
  { photoID: '0', userID: 'gPlake' },
  { photoID: '1', userID: 'sSchmidt' },
  { photoID: '1', userID: 'mHattrup' },
  { photoID: '1', userID: 'gPlake' },
];

const users = [
  { githubLogin: 'mHattrup', name: 'Mike Hattrup' },
  { githubLogin: 'gPlake', name: 'Glen Plake' },
  { githubLogin: 'sSchmidt', name: 'Scot Schmidt' },
];

const photos = [
  {
    id: '0',
    name: 'Dropping the Heart Chute',
    description: 'The heart chute is one of my favorite chutes',
    category: 'ACTION',
    githubUser: 'gPlake',
    created: '3-28-1977',
  },
  {
    id: '1',
    name: 'Enjoying the sunshine',
    category: 'SELFIE',
    githubUser: 'sSchmidt',
    created: '1-2-1985',
  },
  {
    id: '2',
    name: 'Gunbarrel 25',
    description: '25 laps on gunbarrel today',
    category: 'LANDSCAPE',
    githubUser: 'sSchmidt',
    created: '2018-04-15T19:09:57.308Z',
  },
];

const compareDateTime = (v1, v2) => {
  const d1 = new Date(v1);
  const d2 = new Date(v2);
  return d1.getTime() > d2.getTime();
};

let _id = photos.length;

const resolvers = {
  Query: {
    totalPhotos: () => photos.length,
    allPhotos: (parent, args) => {
      if (args.after) {
        return photos.filter((p) => compareDateTime(p.created, args.after));
      }
      return photos;
    },
  },

  Mutation: {
    postPhoto(parent, args) {
      const newPhoto = {
        id: _id++,
        ...args.input,
        created: new Date(),
      };
      photos.push(newPhoto);
      return newPhoto;
    },
  },

  Photo: {
    url: (parent) => `http://yoursite.com/img/${parent.id}.jpg`,
    postedBy: (parent) =>
      users.find((u) => u.githubLogin === parent.githubUser),
    taggedUsers: (parent) =>
      tags
        .filter((t) => t.photoID === parent.id)
        .map((t) => users.find((u) => u.githubLogin === t.userID)),
  },

  User: {
    postedPhotos: (parent) =>
      photos.filter((p) => p.githubUser === parent.githubLogin),
    inPhotos: (parent) =>
      tags
        .filter((t) => t.userID === parent.githubLogin)
        .map((t) => photos.find((p) => p.id === t.photoID)),
  },

  DateTime: new GraphQLScalarType({
    name: 'DateTime',
    description: 'A valid date time value.',
    parseValue: (value) => new Date(value),
    serialize: (value) => new Date(value).toISOString(),
    parseLiteral: (ast) => ast.value,
  }),
};

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
