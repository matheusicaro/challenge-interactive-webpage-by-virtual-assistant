import DatabaseMemoryCache from './memorycache.database';
import DatabaseMongo from './mongodb.database';

/**
 * DataWithId is a interface to ensure that implementations maintain the necessary method to identify the unique id
 * of each data in the database.
 */
export interface DataWithId {
  getId(): string;
}

/**
 * DataSaved is a interface to ensure that the operation of save a data will return the status in cases of in cases
 * where an exception error does not occur in the processes
 */
export interface DataSaved {
  saved: boolean;
}

/**
 * Database is a interface to maintain the contract of the implementation for
 * a new database 'regardless' of the bank to be used.
 */
export interface Database {
  readonly TABLE_NAME_OF_CHATBOT_CONVERSATION: string;

  save<T extends DataWithId>(data: T, tableName: string): Promise<DataSaved>;
  get<T extends DataWithId>(id: string, tableName: string): Promise<T | null>;
}

export { DatabaseMongo, DatabaseMemoryCache };
