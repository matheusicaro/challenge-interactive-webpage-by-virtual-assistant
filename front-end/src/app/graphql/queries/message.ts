import { gql } from '@apollo/client';

export const SEND_MESSAGE = gql`
  mutation SEND_MESSAGE($message: String!, $conversationId: String) {
    sendMessage(message: $message, conversationId: $conversationId) {
      answer
      conversationId
      question
      context {
        commands {
          type
          value
        }
      }
    }
  }
`;
