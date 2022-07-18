import { Db, WithId } from 'mongodb';
import { DbUser } from '../mongo-db/types';

export type Context = {
  db: Db;
  currentUser: WithId<DbUser> | null;
};
