import Message from './models/message.model';
import { Logger } from '../../config/logger';
import ChatbotIntegration from '../integration/chatbot.integration';
import ChatBotMessage from '../integration/models/bot-message.model';

/**
 * Class intended to return Animal Feeding services
 *
 */
class ChabotService {
  /**
   * Method to return animal feedings from animal informed
   *
   */
  public static async sendMessage(message: string): Promise<Message> {
    const chatbotMessage = new ChatBotMessage(message, new Map(), '');

    if (chatbotMessage.getSessionId() === '') {
      chatbotMessage.setSessionId(await ChatbotIntegration.createSessionId());
    }

    Logger.info('ChabotService===> before > ' + JSON.stringify(chatbotMessage));

    const answer = await ChatbotIntegration.send(chatbotMessage);

    Logger.info('ChabotService===>', answer);

    return new Message(message, answer.getText(), new Map());
  }
}

export default ChabotService;
