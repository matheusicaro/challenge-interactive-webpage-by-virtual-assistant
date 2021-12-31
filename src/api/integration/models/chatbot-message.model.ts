export default class ChatBotMessage {
  private messages: Array<string>;
  private context: Map<string, object>;

  constructor(textMessages: Array<string>, conversationContext: Map<string, object>) {
    this.messages = textMessages;
    this.context = conversationContext;
  }

  public getTextMessages(): Array<string> {
    return this.messages;
  }

  public getContext(): Map<string, object> {
    return this.context;
  }
}
