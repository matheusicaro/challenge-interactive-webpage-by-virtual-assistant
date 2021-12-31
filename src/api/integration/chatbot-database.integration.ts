import { Database, DatabaseMemoryCache, DatabaseMongo } from '../../config/database';

import environment from '../../config/environment';
import Session from '../service/models/session.model';
import { Logger } from './../../config/logger';

/**
 * Layer to handle instances of databases providers. Responsible for receiving configuration instances and
 * maintaining contracts with the service class in case it is necessary to change the configuration or have others databases client.
 */
export default class ChatbotDatabase {
  private static instance: Database = environment.DATABASE_IN_MEMORY_CACHE_ACTIVE ? new DatabaseMemoryCache() : new DatabaseMongo();

  /**
   * Function responsible to save session of flow conversation
   *
   * @param  {Session} session: conversation session.
   * @throws {DatabaseIntegrationError}
   * @returns {Promise<void>}
   */
  public static async saveSession(session: Session): Promise<void> {
    try {
      const response = await this.instance.save<Session>(session, this.instance.TABLE_NAME_OF_CHATBOT_CONVERSATION);

      if (!response.saved) throw new DatabaseIntegrationError('Unable to save session');

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new DatabaseIntegrationError(error?.message, error?.stack);
    }
  }

  /**
   * Function responsible to save session of flow conversation
   *
   * @param  {Promise<Session | null>} session: conversation session.
   * @throws {DatabaseIntegrationError}
   * @returns {Promise<void>}
   */
  public static async getSession(sessionId: string): Promise<Session | null> {
    try {
      const response = await this.instance.get<Session>(sessionId, this.instance.TABLE_NAME_OF_CHATBOT_CONVERSATION);
      return response ? (response as Session) : null;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new DatabaseIntegrationError(error?.message, error?.stack);
    }
  }
}

/**
 * Error for identifying failures when integrating with the database.
 */
class DatabaseIntegrationError extends Error {
  constructor(message = 'Unknown error communicating with database', stack?: unknown) {
    super(message);

    if (stack) {
      Logger.error(`[ DatabaseIntegrationError ] - ${message} - stack: ${JSON.stringify(stack)}`);
    }
  }
}
