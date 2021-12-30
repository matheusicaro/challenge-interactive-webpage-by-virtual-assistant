export default class ChatBotMessage {
  private text: string;
  private sessionId: string;
  private context: Map<string, object>;

  constructor(text: string, context: Map<string, object>, sessionId: string) {
    this.text = text;
    this.context = context;
    this.sessionId = sessionId;
  }

  public getText(): string {
    return this.text;
  }

  public getSessionId(): string {
    return this.sessionId;
  }

  public setSessionId(id: string): void {
    this.sessionId = id;
  }
}
