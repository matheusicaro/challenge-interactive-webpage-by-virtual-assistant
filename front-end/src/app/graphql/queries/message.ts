import { gql } from '@apollo/client';

export const SEND_MESSAGE = gql`
  mutation SEND_MESSAGE($message: String!, $conversationId: String) {
    sendMessage(message: $message, conversationId: $conversationId) {
      answer
      conversationId
      context {
        commands {
          type
          value
        }
      }
    }
  }
`;

export interface Message {
  answer: string;
  conversationId: string;
  context: {
    commands: {
      type: string;
      value: string;
    };
  };
}
