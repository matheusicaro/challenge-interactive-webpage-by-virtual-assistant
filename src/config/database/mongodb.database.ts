import { MongoClient, Db, OptionalId, ObjectId } from 'mongodb';
import { Database, DataSaved, DataWithId } from '.';
import environment from '../environment';

/**
 * Implementation of connection with MongoDB
 *
 * @reference https://docs.mongodb.com/drivers/node/current/quick-start/
 */
export default class DatabaseMongo implements Database {
  private client: MongoClient;
  private database: Db;

  /**
   * Collection name in MongoDB
   */
  readonly TABLE_NAME_OF_CHATBOT_CONVERSATION = 'conversation';

  constructor() {
    this.client = new MongoClient(environment.DATABASE_URI);
    this.client.connect();
    this.database = this.client.db(environment.DATABASE_NAME);
  }

  async save<T extends DataWithId>(data: T, tableName: string): Promise<DataSaved> {
    const response = await this.database.collection<T>(tableName).insertOne({ ...data, _id: data.getId() } as OptionalId<T>);
    return { saved: response.acknowledged };
  }

  get<T>(id: string, tableName: string): Promise<T | null> {
    return this.database.collection<T>(tableName).findOne({ _id: new ObjectId(id) }) as Promise<T>;
  }
}
