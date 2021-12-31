import NodeCache from 'node-cache';
import { Database, DataSaved, DataWithId } from '.';
import environment from '../environment';

/**
 * Implementation of in-memory cache using the NodeCache lib, to be used in case of demonstrations
 * where a database is not available. The memory size of this bank is possible to be informed via the environment variable.
 *
 * @field {cacheSizeLimit}: size available for the instance with the default value of 20 megabytes.
 *
 * @reference  https://github.com/node-cache/node-cache
 */
export default class DatabaseMemoryCache implements Database {
  private database: NodeCache;
  private cacheSizeLimit: number;

  private readonly DEFAULT_MEMORY_SIZE_IN_MEGABYTE = 20;
  readonly TABLE_NAME_OF_CHATBOT_CONVERSATION = 'none';

  constructor() {
    const sizeInMegabytes = environment.DATABASE_SIZE_OF_MEMORY_CACHE_IN_MB || this.DEFAULT_MEMORY_SIZE_IN_MEGABYTE;
    const convertMegabytesToBytes = (megabytes: number) => megabytes * 1048576;

    this.cacheSizeLimit = convertMegabytesToBytes(sizeInMegabytes);
    this.database = new NodeCache();
  }

  save<T extends DataWithId>(data: T): Promise<DataSaved> {
    return new Promise((resolve, reject) => {
      try {
        if (this.isReachedTheMemoryLimit()) this.deleteTheLastOldRecords();

        const key = data.getId();
        const value = new Data<T>(Date.now(), data);

        const saved = this.database.set(key, value);

        console.log('[db-memorycache] - status:', this.database.getStats());

        resolve({ saved: saved });
      } catch (error) {
        reject(error);
      }
    });
  }

  get<T extends DataWithId>(id: string): Promise<T | null> {
    return new Promise<T | null>((resolve, reject) => {
      try {
        resolve(this.findData<T>(id)?.getValue() || null);
      } catch (error) {
        reject(error);
      }
    });
  }

  private findData<T>(key: string): Data<T> | null {
    return this.database.get<Data<T>>(key) || null;
  }

  /**
   * Method responsible to verify if limit configured for the database size was reached
   *
   * @returns {boolean}
   *
   * @property {database.getStats().vsize}: return the data value salved in bytes.
   * @reference  https://github.com/node-cache/node-cache#statistics-stats
   */
  private isReachedTheMemoryLimit(): boolean {
    return this.database.getStats().vsize > this.cacheSizeLimit;
  }

  /**
   * Method responsible to delete the oldest data by the date it was saved in the database.
   *
   * @param {number} total: total old items to be deleted
   * @returns {void}
   *
   * @property {database.getStats().vsize}: return the data value salved in bytes.
   * @reference  https://github.com/node-cache/node-cache#statistics-stats
   */
  private deleteTheLastOldRecords(total = 5): void {
    const keys = this.database.keys().map((key) => ({ key, savedAt: this.findData(key)?.getSaveAt() || 0 }));

    const ascendingOrder = (a: number, b: number) => a - b;

    const oldestKeysInCache = keys
      .sort((a, b) => ascendingOrder(a.savedAt, b.savedAt))
      .slice(0, total)
      .map((e) => e.key);

    this.database.del(oldestKeysInCache);
  }
}

/**
 * Model responsible to represent the data scheme salved in the database MemoryCache.
 *
 */
class Data<T> {
  private saveAt: number;
  private value: T;

  constructor(saveAt: number, value: T) {
    this.saveAt = saveAt;
    this.value = value;
  }

  public getSaveAt(): number {
    return this.saveAt;
  }

  public getValue(): T {
    return this.value;
  }
}
