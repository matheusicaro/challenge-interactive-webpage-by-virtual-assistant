import VirtualAssistantInstance from '../../config/virtual-assistant';
import ChatBotMessage from './models/bot-message.model';

export default class ChatbotIntegration {
  /**
   * Method to return animal feedings from animal informed
   *
   * @param  {AnimalEnum} animalName: type of animal
   * @returns {Promise<Array<AnimalFeeding>>}: promise to return list of AnimalFeeding
   */
  public static async send(message: ChatBotMessage): Promise<ChatBotMessage> {
    const answer = await new VirtualAssistantInstance().send(message);

    return new ChatBotMessage(answer.getText(), new Map(), message.getSessionId());
  }

  public static createSessionId(): Promise<string> {
    return new VirtualAssistantInstance().createSession();
  }
}
