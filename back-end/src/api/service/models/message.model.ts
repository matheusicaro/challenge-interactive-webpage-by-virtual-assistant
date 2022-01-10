import CONTEXT_KEYS from '../constants/bot-context.constants';

/**
 * Message represents the API contract with the consumer client.
 *
 * @field {answer}: list of chatbot answers in ascending order for question sent
 * @field {question}: text message sent to Chatbot.
 * @field {context}: metadata extracted from the conversation by business rules or by the virtual assistant
 * @field {conversationId}: unique identification of the conversation between the user and the chatbot.
 */
export default class Message {
  private answer: Array<string>;
  private context: Map<string, any>;
  private conversationId: string;
  private question: string;
  private language: Language;

  constructor(conversationId: string, question: string, answer: Array<string>, context: Map<string, any>) {
    this.answer = answer;
    this.context = context;
    this.conversationId = conversationId;
    this.question = question;

    const newLanguage = this.context.has(CONTEXT_KEYS.LANGUAGE) ? (this.context.get(CONTEXT_KEYS.LANGUAGE) as keyof typeof Language) : null;

    if (newLanguage && Language[newLanguage]) {
      this.language = Language[newLanguage];
    } else {
      this.language = Language.EN;
    }
  }

  public getAnswer(): Array<string> {
    return this.answer;
  }

  public getContext(): Map<string, any> {
    return this.context;
  }

  public getConversationId(): string {
    return this.conversationId;
  }

  public getQuestion(): string {
    return this.question;
  }

  public getLanguage(): Language {
    return this.language;
  }
}

export enum Language {
  EN,
  FR
}
