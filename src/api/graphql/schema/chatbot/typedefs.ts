import { gql } from 'apollo-server-core';

export const chatbotTypeDefs = gql`
  type Mutation {
    sendMessage(message: String!, conversationId: String): Message!
  }

  "Message is the contract to have a messaging interaction with the bot."
  type Message {
    "Message sent by the client"
    question: String!

    "Bot's answer for the question sent"
    answer: [String]!

    "Context is the the metadata extracted from the question sent and the all conversation"
    context: MessageContext!
    conversationId: String!
  }

  "MessageContext is the the metadata extracted from the question sent and the all conversation"
  type MessageContext {
    """
    Commands is a list of commands (actions, automation) to be executed in sequence following the index of the list in ascending way. For example, index[0] is the first action to be executed in the client platform, and the index[1] is the second action to be executed after the fist action.
    """
    commands: [Command]
  }

  """
  Command is a chatbot way to communicate an action or automation detected through the question analyzed by the NLP (natural language process) that must be executed to attend the question sent.
  """
  type Command {
    type: String
    value: String
  }
`;
