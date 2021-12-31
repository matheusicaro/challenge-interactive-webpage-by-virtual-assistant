import VirtualAssistantInstance from '../../config/virtual-assistant';
import ChatBotMessage from './models/chatbot-message.model';

/**
 * Layer to handle instances of virtual assistant providers. Responsible for receiving configuration instance and
 * maintaining contracts with the service class in case it is necessary to change configuration or external client to
 * ChatbotIntegration without breaking the service.
 */
export default class ChatbotIntegration {
  /**
   * Function responsible to send message and others parameters necessaries to communicate with the bot.
   *
   * @param  {string} message: message sent by user/client to the Chatbot
   * @param  {string} sessionId: id of session which control the context and the conversation flow.
   * @param  {Map<string, object>} context: context with the variables and logics applied in
   *
   * @returns {Promise<ChatBotMessage>}: promise to return list of AnimalFeeding
   */
  public static async send(message: string, sessionId: string, context = new Map<string, object>()): Promise<ChatBotMessage> {
    const answer = await new VirtualAssistantInstance().send(message, context, sessionId);
    return answer;
  }

  public static createSessionId(): Promise<string> {
    return new VirtualAssistantInstance().createSession();
  }
}
