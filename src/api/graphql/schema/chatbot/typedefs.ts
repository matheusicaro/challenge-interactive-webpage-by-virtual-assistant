import { gql } from 'apollo-server-core';

export const chatbotTypeDefs = gql`
  type Mutation {
    sendMessage(message: String!): Message!
  }

  "Message is the contract to have a messaging interaction with the bot."
  type Message {
    "Message sent by the client"
    question: String!
    "Answer is the bot's answer"
    answer: [String]!
    "Context is the conversation context of the bot"
    context: MessageContext!
    conversationId: String!
  }

  """
  Message Context is the bot's context with variables extracted from the conversation between the user and the bot through the messages sent.
  """
  type MessageContext {
    """
    Commands is a list of commands (actions, automation) to be executed in sequence following the index of the list in ascending way. For example, index[0] is the first action to be executed in the client platform, and the index[1] is the second action to be executed after the fist action.
    """
    commands: [Command]
  }

  "Command is a chatbot wat to communicate an action or automation detected through the question of the message sent to."
  type Command {
    type: CommandType!
    value: String
  }

  """
  CommandType are human-typed commands for exchanging information on executing commands/actions recognized by the chatbot to the target platform connected to the client.
  """
  enum CommandType {
    REDIRECT_TO_PAGE
  }
`;
