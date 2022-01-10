import Message from './models/message.model';
import ChatbotIntegration from '../integration/chatbot-assistant.integration';
import Session from './models/session.model';
import ChatbotDatabase from '../integration/chatbot-database.integration';
import CONTEXT_KEYS from './constants/bot-context.constants';

/**
 * Class to handle business rule and provide layer between inputs and outputs.
 */
class ChabotService {
  /**
   * Class responsible for dealing with business rules related to the exchange of messages between the user and the chatbot.
   *
   * @param  {string} textMessage: message sent by user/client to the Chatbot
   * @param  {string} conversationId: id of session which control the context and the conversation flow.
   *
   * @returns {Promise<Message>}
   */
  public static async sendMessage(textMessage: string, conversationId?: string, language?: string): Promise<Message> {
    const sessionId = conversationId || (await ChatbotIntegration.createSessionId());
    let session = await ChatbotDatabase.getSession(sessionId);

    if (!session) {
      session = new Session(sessionId);
    }

    if (language) session.addInContext(CONTEXT_KEYS.LANGUAGE, language);

    const answer = await ChatbotIntegration.send(textMessage, sessionId, session.getContext());

    session.setContext(answer.getContext());
    session.addMessage(textMessage, answer.getTextMessages());

    ChatbotDatabase.saveSession(session);

    return new Message(sessionId, textMessage, answer.getTextMessages(), answer.getContext());
  }
}

export default ChabotService;
