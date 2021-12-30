export default class Message {
  private messageSent: string;
  private answer: string;
  private context: Map<string, object>;

  constructor(messageSent: string, answer: string, context: Map<string, object>) {
    this.messageSent = messageSent;
    this.answer = answer;
    this.context = context;
  }

  public getMessageSent(): string {
    return this.messageSent;
  }

  public getAnswer(): string {
    return this.answer;
  }

  public getContext(): Map<string, object> {
    return this.context;
  }
}
