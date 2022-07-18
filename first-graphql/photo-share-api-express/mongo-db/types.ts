import { Photo, User } from './../graphql/generated/resolvers';

export type DbUser = Pick<User, 'avatar' | 'githubLogin' | 'name'> & {
  githubToken?: string;
};

export type DbPhoto = Pick<
  Photo,
  'name' | 'description' | 'category' | 'created'
> & {
  githubUser: string;
};
