import { GraphQLScalarType } from 'graphql';
import { WithId } from 'mongodb';
import { DbPhoto, DbUser } from '../mongo-db/types';
import { User } from './../graphql/generated/resolvers';
import { mutation } from './mutation';
import { query } from './query';
import { Context } from './types';

export const resolvers = {
  Query: query,
  Mutation: mutation,
  Photo: {
    url: (parent: WithId<DbPhoto>) =>
      `http://yoursite.com/img/${parent._id}.jpg`,
    postedBy: async (parent: WithId<DbPhoto>, args: {}, { db }: Context) => {
      // const users = await db.collection<DbUser>('users').find().toArray();
      // return users.find((u) => u.githubLogin === parent.githubUser);
      return await db
        .collection<DbUser>('users')
        .findOne({ githubLogin: parent.githubUser });
    },
    taggedUsers: (parent: WithId<DbPhoto>) => [],
  },
  User: {
    postedPhotos: async (parent: User, args: {}, { db }: Context) => {
      const photos = await db.collection<DbPhoto>('photos').find().toArray();
      return photos.filter((p) => p.githubUser === parent.githubLogin);
    },
    inPhotos: (parent: User) => [],
  },
  DateTime: new GraphQLScalarType({
    name: 'DateTime',
    description: 'A valid date time value.',
    parseValue: (value: any) => new Date(value),
    serialize: (value: any) => new Date(value).toISOString(),
    parseLiteral: (ast: any) => ast.value,
  }),
};
