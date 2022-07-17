import { GraphQLScalarType } from 'graphql';
import {
  MutationPostPhotoArgs,
  Photo,
  PhotoCategory,
  QueryAllPhotosArgs,
  User,
} from './../graphql/generated/resolvers';

type CustomPhoto = Partial<Photo> & {
  githubUser?: string;
};

const tags = [
  { photoID: '0', userID: 'gPlake' },
  { photoID: '1', userID: 'sSchmidt' },
  { photoID: '1', userID: 'mHattrup' },
  { photoID: '1', userID: 'gPlake' },
];

const users: User[] = [
  {
    githubLogin: 'mHattrup',
    name: 'Mike Hattrup',
    inPhotos: [],
    postedPhotos: [],
  },
  { githubLogin: 'gPlake', name: 'Glen Plake', inPhotos: [], postedPhotos: [] },
  {
    githubLogin: 'sSchmidt',
    name: 'Scot Schmidt',
    inPhotos: [],
    postedPhotos: [],
  },
];

const photos: CustomPhoto[] = [
  {
    id: '0',
    name: 'Dropping the Heart Chute',
    description: 'The heart chute is one of my favorite chutes',
    category: PhotoCategory.Action,
    githubUser: 'gPlake',
    created: '3-28-1977',
  },
  {
    id: '1',
    name: 'Enjoying the sunshine',
    category: PhotoCategory.Selfie,
    githubUser: 'sSchmidt',
    created: '1-2-1985',
  },
  {
    id: '2',
    name: 'Gunbarrel 25',
    description: '25 laps on gunbarrel today',
    category: PhotoCategory.Landscape,
    githubUser: 'sSchmidt',
    created: '2018-04-15T19:09:57.308Z',
  },
];

const compareDateTime = (v1: string, v2: string) => {
  const d1 = new Date(v1);
  const d2 = new Date(v2);
  return d1.getTime() > d2.getTime();
};

let _id = photos.length;

export const resolvers = {
  Query: {
    totalPhotos: () => photos.length,
    allPhotos: (parent: {}, args: QueryAllPhotosArgs) => {
      if (args.after) {
        return photos.filter((p) => compareDateTime(p.created, args.after));
      }
      return photos;
    },
  },

  Mutation: {
    postPhoto(parent: {}, args: MutationPostPhotoArgs) {
      const newPhoto: CustomPhoto = {
        id: (_id++).toString(),
        ...args.input,
        created: new Date(),
      };
      photos.push(newPhoto);
      return newPhoto;
    },
  },

  Photo: {
    url: (parent: CustomPhoto) => `http://yoursite.com/img/${parent.id}.jpg`,
    postedBy: (parent: CustomPhoto) =>
      users.find((u) => u.githubLogin === parent.githubUser),
    taggedUsers: (parent: CustomPhoto) =>
      tags
        .filter((t) => t.photoID === parent.id)
        .map((t) => users.find((u) => u.githubLogin === t.userID)),
  },

  User: {
    postedPhotos: (parent: User) =>
      photos.filter((p) => p.githubUser === parent.githubLogin),
    inPhotos: (parent: User) =>
      tags
        .filter((t) => t.userID === parent.githubLogin)
        .map((t) => photos.find((p) => p.id === t.photoID)),
  },

  DateTime: new GraphQLScalarType({
    name: 'DateTime',
    description: 'A valid date time value.',
    parseValue: (value: any) => new Date(value),
    serialize: (value: any) => new Date(value).toISOString(),
    parseLiteral: (ast: any) => ast.value,
  }),
};
