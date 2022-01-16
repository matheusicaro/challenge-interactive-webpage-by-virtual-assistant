import { SendMessageData } from '../../graphql/queries/message';
import { Command } from '../../store/chat/types';

export type ChatState = {
  conversation: {
    answered: boolean;
    newMessage: boolean;
    userLastMessage: string;
    chatbotLastAnswer: Array<string>;
    conversationId: string;
    commands: Array<Command>;
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
