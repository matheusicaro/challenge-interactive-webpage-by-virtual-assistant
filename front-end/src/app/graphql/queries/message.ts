import { gql } from '@apollo/client';

export const SEND_MESSAGE = gql`
  mutation SEND_MESSAGE($message: String!, $conversationId: String, $language: String) {
    sendMessage(message: $message, conversationId: $conversationId, language: $language) {
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

export interface SendMessageData {
  sendMessage: {
    answer: Array<string>;
    conversationId: string;
    context: {
      commands: {
        type: string;
        value: string;
      };
    };
  };
}
