import Message from './models/message.model';
import ChatbotIntegration from '../integration/chatbot-assistant.integration';
import Session from './models/session.model';
import ChatbotDatabase from '../integration/chatbot-database.integration';

/**
 * Class to handle business rule and provide layer between inputs and outputs.
 */
class ChabotService {
  /**
   * Method responsible for sending the message received by the client/user
   *
   * @param  {string} message: message sent by user/client to the Chatbot
   * @param  {string} conversationId: id of session which control the context and the conversation flow.
   *
   * @returns {Promise<Message>}: promise to return list of AnimalFeeding
   */
  public static async sendMessage(message: string, conversationId?: string): Promise<Message> {
    const sessionId = conversationId || (await ChatbotIntegration.createSessionId());
    let session = await ChatbotDatabase.getSession(sessionId);

    if (!session) {
      session = new Session(sessionId);
    }

    const answer = await ChatbotIntegration.send(message, sessionId, session.getContext());

    session.setContext(answer.getContext());
    session.addMessage(message, answer.getTextMessages());

    ChatbotDatabase.saveSession(session);

    return new Message(sessionId, message, answer.getTextMessages(), answer.getContext());
  }
}

export default ChabotService;
