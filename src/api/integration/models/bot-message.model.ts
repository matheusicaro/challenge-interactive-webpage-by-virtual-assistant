export default class BotMessage {
  private text: string;
  private context: Map<string, object>;

  constructor(text: string, context: Map<string, object>) {
    this.text = text;
    this.context = context;
  }

  public getText(): string {
    return this.text;
  }
}
