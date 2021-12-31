import WatsonAssistant, { WatsonResponseAnswers, WatsonResponseContext } from '../../config/watson-assistant';
import ChatbotMessage from './models/chatbot-message.model';

/**
 * Layer to handle instances of virtual assistant providers. Responsible for receiving configuration instances and
 * maintaining contracts with the service class in case it is necessary to change configuration or external client to
 * ChatbotIntegration without breaking the service of business rule.
 */
export default class ChatbotIntegration {
  private static instance = new WatsonAssistant();

  /**
   * Function responsible to send message to instance of virtual assistant and return the ChatBotMessage.
   *
   * @param  {string} message: message sent by user/client to the Chatbot
   * @param  {string} sessionId: id of session which control the context and the conversation flow.
   * @param  {Map<string, object>} context: current context with the variables and logics to be analyzed in
   * virtual assistant and extracted in the conversation
   *
   * @returns {Promise<ChatbotMessage>}: promise to return list of AnimalFeeding
   */
  public static async send(message: string, sessionId: string, context = new Map<string, object>()): Promise<ChatbotMessage> {
    const { result } = await this.instance.send(message, context, sessionId);

    const answers = this.getAnswers(result.output.generic);
    const newContext = this.converterToMap(result.context?.skills as WatsonResponseContext);

    return new ChatbotMessage(answers, newContext);
  }

  public static createSessionId(): Promise<string> {
    return new WatsonAssistant().createSession();
  }

  private static converterToMap(context?: WatsonResponseContext): Map<string, object> {
    if (!context) return new Map();

    const mainSkill = context['main skill'] || context.main_skill;

    return mainSkill.user_defined || new Map();
  }

  private static getAnswers(answers?: WatsonResponseAnswers): Array<string> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return answers?.map((e: any) => e?.text) || [];
  }
}
