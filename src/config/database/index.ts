import DatabaseMemoryCache from './memorycache.database';
import DatabaseMongo from './mongodb.database';

export interface DataWithId {
  getId(): string;
}

export interface DataSaved {
  saved: boolean;
}

export interface Database {
  readonly TABLE_NAME_OF_CHATBOT_CONVERSATION: string;

  save<T extends DataWithId>(data: T, tableName: string): Promise<DataSaved>;
  get<T extends DataWithId>(id: string, tableName: string): Promise<T | null>;
}

export { DatabaseMongo, DatabaseMemoryCache };
