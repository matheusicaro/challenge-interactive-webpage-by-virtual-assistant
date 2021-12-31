type ConversationMessage = {
  question: string;
  answer: Array<string>;
};

/**
 * represent the conversation session to be saved in the database and transacted by the entire application on each request.
 */
export default class Session {
  private id: string;
  private context: Map<string, object>;
  private conversation: Array<ConversationMessage>;

  constructor(id: string, conversationContext?: Map<string, object>) {
    this.id = id;
    this.context = conversationContext || new Map();
    this.conversation = [];
  }

  public getId(): string {
    return this.id;
  }

  public getContext(): Map<string, object> {
    return this.context;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public setContext(context: Map<string, object>): void {
    this.context = context;
  }

  public addMessage(question: string, answer: Array<string>): void {
    this.conversation.push({ question, answer });
  }

  public addMessages(messages: Array<ConversationMessage>): void {
    this.conversation = this.conversation.concat(messages);
  }
}
