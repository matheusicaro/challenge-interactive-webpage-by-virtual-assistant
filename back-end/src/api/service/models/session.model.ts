type ConversationMessage = {
  question: string;
  answer: Array<string>;
};

/**
 * Session represents the state of with all the metadata necessary to maintain a dialog with a virtual assistant.
 *
 * @field {id}: unique id of the logged in session
 * @field {conversation}: message history between user and chatbot.
 * @field {context}: metadata extracted from the conversation by business rules or by the virtual assistant
 * through NLP (natural language processing).
 */
export default class Session {
  private id: string;
  private context: object;
  private conversation: Array<ConversationMessage>;

  constructor(id: string, conversationContext?: Map<string, object>) {
    this.id = id;
    this.context = conversationContext ? Object.fromEntries(conversationContext) : {};
    this.conversation = [];
  }

  public getId(): string {
    return this.id;
  }

  public getContext(): Map<string, any> {
    return new Map(Object.entries(this.context));
  }

  public setId(id: string): void {
    this.id = id;
  }

  public setContext(context: Map<string, any>): void {
    this.context = Object.fromEntries(context);
  }

  public addMessage(question: string, answer: Array<string>): void {
    this.conversation.push({ question, answer });
  }

  public addMessages(messages: Array<ConversationMessage>): void {
    this.conversation = this.conversation.concat(messages);
  }

  public addInContext<T>(key: string, value: T): void {
    const contextAsMap = new Map(Object.entries(this.context));

    if (!contextAsMap.has(key)) contextAsMap.delete(key);

    contextAsMap.set(key, value);
    this.context = Object.fromEntries(contextAsMap);
  }
}
