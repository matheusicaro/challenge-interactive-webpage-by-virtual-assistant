/**
 * Model responsible to save session to maintain the same conversation flow where the bot will know in what position
 * of the tree, the last message is.
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
