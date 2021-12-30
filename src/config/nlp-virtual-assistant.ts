import BotMessage from '../api/integration/models/bot-message.model';
import AssistantV2 from 'ibm-watson/assistant/v2';
import { IamAuthenticator } from 'ibm-watson/auth';
export default class VirtualAssistantInstance {
  private static Assistant: AssistantV2;

  constructor() {
    VirtualAssistantInstance.Assistant = new AssistantV2({
      version: '2021-06-14',
      authenticator: new IamAuthenticator({
        apikey: '{apikey}'
      }),
      serviceUrl: '{url}'
    });
  }

  /**
   * The IBM Watson™ Assistant service combines machine learning, natural language understanding, and an integrated
   * dialog editor to create conversation flows between your apps and your users.
   * The Assistant v2 API provides runtime methods your client application can use to send user input to an assistant
   * and receive a response.
   *
   * @param  {AnimalEnum} animalName: type of animal
   * @returns {Promise<Array<AnimalFeeding>>}: promise to return list of AnimalFeeding
   */
  public static async send(message: BotMessage): Promise<BotMessage> {
    const answer = await this.Assistant.message({
      assistantId: '{assistant_id}',
      sessionId: '{session_id}',
      input: {
        message_type: 'text',
        text: message.getText()
      }
    });

    return message;
  }
}
