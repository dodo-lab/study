import { WithId } from 'mongodb';
import { QueryAllPhotosArgs } from '../graphql/generated/resolvers';
import { DbPhoto, DbUser } from '../mongo-db/types';
import { Context } from './types';

const compareDateTime = (v1: string, v2: string) => {
  const d1 = new Date(v1);
  const d2 = new Date(v2);
  return d1.getTime() > d2.getTime();
};

export const query = {
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
  allUsers: async (parent: {}, args: {}, { db }: Context) => {
    const users = await db.collection<DbUser>('users').find().toArray();
    return users;
  },
  me: (parent: {}, args: {}, { currentUser }: Context) => currentUser,
};
