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
  private context: Map<string, object>;
  private conversationId: string;
  private question: string;

  constructor(conversationId: string, question: string, answer: Array<string>, context: Map<string, object>) {
    this.answer = answer;
    this.context = context;
    this.conversationId = conversationId;
    this.question = question;
  }

  public getAnswer(): Array<string> {
    return this.answer;
  }

  public getContext(): Map<string, object> {
    return this.context;
  }

  public getConversationId(): string {
    return this.conversationId;
  }

  public getQuestion(): string {
    return this.question;
  }
}
