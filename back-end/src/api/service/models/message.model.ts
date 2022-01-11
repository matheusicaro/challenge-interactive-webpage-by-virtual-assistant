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
  private context: object;
  private conversationId: string;
  private question: string;
  private language: Language;

  constructor(conversationId: string, question: string, answer: Array<string>, context: Map<string, any>) {
    this.answer = answer;
    this.context = context;
    this.conversationId = conversationId;
    this.question = question;

    let language: Language = Language.EN;

    if (context && context.has(CONTEXT_KEYS.LANGUAGE)) {
      const keyLanguage = context.get(CONTEXT_KEYS.LANGUAGE) as keyof typeof Language;
      language = keyLanguage ? Language[keyLanguage] : language;
    } else {
      context.set(CONTEXT_KEYS.LANGUAGE, language);
    }

    this.language = language;
    this.context = Object.fromEntries(context);
  }

  public getAnswer(): Array<string> {
    return this.answer;
  }

  public getContext(): Map<string, any> {
    return new Map(Object.entries(this.context));
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
  EN = 'EN',
  FR = 'FR'
}
