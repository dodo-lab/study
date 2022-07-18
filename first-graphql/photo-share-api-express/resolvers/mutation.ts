import {
  AuthPayload,
  MutationGithubAuthArgs,
  MutationPostPhotoArgs,
} from '../graphql/generated/resolvers';
import { DbPhoto, DbUser } from '../mongo-db/types';
import { authorizeWithGithub } from '../utils/github';
import { Context } from './types';

export const mutation = {
  async postPhoto(
    parent: {},
    args: MutationPostPhotoArgs,
    { db, currentUser }: Context
  ) {
    if (!currentUser) {
      throw new Error('only an authorized user can post a photo');
    }

    const newPhoto: DbPhoto = {
      ...args.input,
      githubUser: currentUser.githubLogin,
      created: new Date(),
    };
    const { insertedId } = await db.collection('photos').insertOne(newPhoto);
    const photo = { ...newPhoto, id: insertedId };
    return photo;
  },
  async githubAuth(
    parent: {},
    { code }: MutationGithubAuthArgs,
    { db }: Context
  ): Promise<AuthPayload> {
    const authRes = await authorizeWithGithub({
      client_id: process.env.GITHUB_CLIENT_ID ?? '',
      client_secret: process.env.GITHUB_CLIENT_SECRET ?? '',
      code,
    });
    const { message, access_token, avatar_url, login, name } = authRes;

    if (message) {
      throw new Error(message);
    }

    const latestUserInfo = {
      name,
      githubLogin: login,
      githubToken: access_token,
      avatar: avatar_url,
    };

    const user = await db
      .collection<DbUser>('users')
      .replaceOne({ githubLogin: login }, latestUserInfo, { upsert: true });

    // @ts-ignore
    return { user: latestUserInfo, token: access_token };
  },
};
