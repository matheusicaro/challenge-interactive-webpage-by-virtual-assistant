import { SendMessageData } from '../../graphql/queries/message';

export type ChatState = {
  conversation: {
    answered: boolean;
    newMessage: boolean;
    chatbotLastAnswer: Array<string>;
    conversationId: string;
  };
  loader: {
    active: boolean;
    attemptsToDisable: number;
  };
  errorInformed: boolean;
  open: boolean;
  welcomeMessageViewed: boolean;
};

export type MessagePayload = SendMessageData | null | undefined;
