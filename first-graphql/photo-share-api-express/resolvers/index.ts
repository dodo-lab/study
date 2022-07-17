import { GraphQLScalarType } from 'graphql';
import { Db, WithId } from 'mongodb';
import { DbPhoto, DbUser } from '../mongo-db/types';
import {
  MutationPostPhotoArgs,
  QueryAllPhotosArgs,
  User,
} from './../graphql/generated/resolvers';

type Context = {
  db: Db;
};

const compareDateTime = (v1: string, v2: string) => {
  const d1 = new Date(v1);
  const d2 = new Date(v2);
  return d1.getTime() > d2.getTime();
};

export const resolvers = {
  Query: {
    totalPhotos: (parent: {}, args: {}, { db }: Context) =>
      db.collection('photos').estimatedDocumentCount(),
    allPhotos: async (
      parent: {},
      args: QueryAllPhotosArgs,
      { db }: Context
    ): Promise<WithId<DbPhoto>[]> => {
      const photos = await db.collection<DbPhoto>('photos').find().toArray();
      if (args.after) {
        return photos.filter((p) => compareDateTime(p.created, args.after));
      }
      return photos;
    },
    totalUsers: (parent: {}, args: {}, { db }: Context) =>
      db.collection('users').estimatedDocumentCount(),
    allUsers: async (panret: {}, args: {}, { db }: Context) => {
      const users = await db.collection<DbUser>('users').find().toArray();
      return users;
    },
  },

  Mutation: {
    postPhoto(parent: {}, args: MutationPostPhotoArgs, { db }: Context) {
      const newPhoto: DbPhoto = {
        ...args.input,
        created: new Date(),
      };
      db.collection('photos').insertOne(newPhoto);
      return newPhoto;
    },
  },

  Photo: {
    url: (parent: WithId<DbPhoto>) =>
      `http://yoursite.com/img/${parent._id}.jpg`,
    postedBy: async (parent: WithId<DbPhoto>, args: {}, { db }: Context) => {
      const users = await db.collection<DbUser>('users').find().toArray();
      return users.find((u) => u.githubLogin === parent.githubUser);
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
