import fetch from 'node-fetch';
import {
  AuthPayload,
  MutationAddFakeUsersArgs,
  MutationGithubAuthArgs,
  MutationPostPhotoArgs,
} from '../graphql/generated/resolvers';
import { DbPhoto, DbUser } from '../mongo-db/types';
import { authorizeWithGithub } from '../utils/github';
import { toJSON } from '../utils/utils';
import { Context } from './types';

export const mutation = {
  // 写真投稿.
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
  // GitHub認証.
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
  // フェイクユーザー追加.
  async addFakeUsers(
    parent: {},
    { count }: MutationAddFakeUsersArgs,
    { db }: Context
  ) {
    const randomUserApi = `https://randomuser.me/api/?results=${count}`;
    const { results } = await fetch(randomUserApi).then(toJSON);
    const users = results.map((v: any) => ({
      githubLogin: v.login.username,
      name: `${v.name.first} ${v.name.last}`,
      avatar: v.picture.thumbnail,
      githubToken: v.login.sha1,
    }));

    await db.collection('users').insertMany(users);
    return users;
  },
};
