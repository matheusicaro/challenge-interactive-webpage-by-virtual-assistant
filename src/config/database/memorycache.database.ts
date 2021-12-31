import NodeCache from 'node-cache';
import { Database, DataSaved, DataWithId } from '.';
import environment from '../environment';

interface KeySplitted {
  time: number;
  id: string;
}

export default class DatabaseMemoryCache implements Database {
  private cache: NodeCache;
  private cacheLimitInMb: number;

  private readonly DEFAULT_MEMORY_SIZE = 20;
  private readonly SECRET_TO_KEY_JOIN = '-#SECRET#-';
  readonly TABLE_NAME_OF_CHATBOT_CONVERSATION = 'none';

  constructor() {
    this.cache = new NodeCache();
    this.cacheLimitInMb = environment.DATABASE_SIZE_OF_MEMORY_CACHE_IN_MB || this.DEFAULT_MEMORY_SIZE;
  }

  save<T extends DataWithId>(data: T, tableName: string): Promise<DataSaved> {
    return new Promise((resolve, reject) => {
      try {
        if (this.isReachedTheMemoryLimit()) this.deleteTheLastOldRecords();

        const key = this.joinTheKeyThroughTheSecret(Date.now(), data.getId());
        const saveInCache = () => this.cache.set(key, data);

        resolve({ saved: saveInCache() });
      } catch (error) {
        reject(error);
      }
    });
  }

  get<T extends DataWithId>(id: string, tableName: string): Promise<T | null> {
    return new Promise<T | null>((resolve, reject) => {
      try {
        resolve(this.cache.get(id) || null);
      } catch (error) {
        reject(error);
      }
    });
  }

  private isReachedTheMemoryLimit(): boolean {
    console.log('CACHE MEMORY', this.cache.getStats());
    return this.cache.getStats().ksize > this.cacheLimitInMb;
  }

  private deleteTheLastOldRecords(total = 5): void {
    const keysSplitted = this.cache.keys().map((e) => this.splitTheKeyThroughTheSecret(e));

    const ascendingOrder = (a: KeySplitted, b: KeySplitted) => a.time - b.time;

    const oldestKeysInCache = keysSplitted
      .sort(ascendingOrder)
      .slice(0, total)
      .map((e) => e.id);

    this.cache.del(oldestKeysInCache);
  }

  private joinTheKeyThroughTheSecret(timestamp: number, id: string): string {
    return `${timestamp}${this.SECRET_TO_KEY_JOIN}${id}`;
  }

  private splitTheKeyThroughTheSecret(key: string): KeySplitted {
    const splitted = key.split(this.SECRET_TO_KEY_JOIN);
    return {
      time: parseInt(splitted[0]),
      id: splitted[1]
    };
  }
}
