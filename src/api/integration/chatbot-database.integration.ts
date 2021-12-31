import { Database, DatabaseMemoryCache, DatabaseMongo } from '../../config/database';

import environment from '../../config/environment';
import Session from '../service/models/session.model';
import { Logger } from './../../config/logger';

/**
 * Layer to handle instances of databases providers. Responsible for receiving configuration instance and
 * maintaining contracts with the service class in case it is necessary to change configuration or have others databases client.
 */
export default class ChatbotDatabase {
  private static instance: Database = environment.DATABASE_IN_MEMORY_CACHE_ACTIVE ? new DatabaseMemoryCache() : new DatabaseMongo();

  /**
   *Function responsible to save session to maintain the same conversation flow where the bot will know in what position of the tree, the last message is.
   *
   * @param  {Session} session: session with data from the conversation between user and bot.
   * @returns {Promise<void>}: promise to return list of AnimalFeeding
   */
  public static async saveSession(session: Session): Promise<void> {
    try {
      const response = await this.instance.save<Session>(session, this.instance.TABLE_NAME_OF_CHATBOT_CONVERSATION);

      if (response.saved) throw new DatabaseIntegrationError('Unable to save session');
    } catch (error: any) {
      throw new DatabaseIntegrationError(error?.message, error?.stack);
    }
  }

  public static async getSession(sessionId: string): Promise<Session | null> {
    try {
      const response = await this.instance.get<Session>(sessionId, this.instance.TABLE_NAME_OF_CHATBOT_CONVERSATION);
      return response ? (response as Session) : null;
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
