import { useMutation } from '@apollo/client';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { toggleMsgLoader } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import { SendMessageData, SEND_MESSAGE } from '../../graphql/queries/message';
import { globalContext } from '../../store';
import { addNewChatbotPositionMessageId, addNewCommands } from '../../store/chat/actions';
import { Command } from '../../store/chat/types';
import ChatView from './Chat';
import CommandsListener from './command-listener';
import { CHAT_MESSAGES, CHAT_CONSTANTS } from './constants';
import {
  loaderIsEnabled,
  enableLastResponseMessage,
  addMessagesInTheChat,
  getConversationId,
  joinMessagesByParagraph,
  thereAreCommandsToBeExecuted,
  removeTextFormatting,
  errorBySessionExpired,
  messageAlreadyAnswered,
  areValidMessages,
  enableChatHistory,
} from './helpers';
import { ChatState } from './types';

/*
 * Standalone chat component as a widget.
 *
 * Due to development time, this open source component was used. However, I feel very motivated to make my own
 * chatbot widget in the future and so it will be updated in this project.
 *
 * OBS: When using this component, 2 bugs were found (duplicate messages and loader independent activations) that could
 * probably be related to a version crash. However, bugs were handled through style manipulation in the DOM by
 * independent functions at the end of this file.
 *
 * Source: https://github.com/Wolox/react-chat-widget
 */
const Chat: React.FC = () => {
  const [state, setState] = useState<ChatState>(initialState());

  const { globalState, dispatch } = useContext(globalContext);
  const [sendMessage, { error, data, loading }] = useMutation<SendMessageData>(SEND_MESSAGE);

  const handleOpenChat = (open: boolean) => setState((prev) => ({ ...prev, open }));

  const loaderActivatedIncorrectly = (state: ChatState) => {
    const active = !state.loader.active;
    const loader = loaderIsEnabled();
    return active && loader;
  };

  const enableLoader = () => {
    toggleMsgLoader();
    setState(updateStateWhenLoaderIsEnabled);
  };

  const disableLoader = () => {
    toggleMsgLoader();
    setState(updateStateWhenTheLoaderIsDisabled);
  };

  const enableLastChatbotMessage = () => {
    const messagePositionId = enableLastResponseMessage();
    if (messagePositionId !== null) dispatch(addNewChatbotPositionMessageId(messagePositionId));
  };

  const handleWhenChatIsOpened = () => {
    if (state.open) {
      if (!state.welcomeMessageViewed) {
        enableLastChatbotMessage();
        setState((prev) => ({ ...prev, welcomeMessageViewed: true }));
      }

      enableChatHistory(globalState.chat.chatbot.messageIdList);
    }
  };

  const sendResponseMessage = (message: string) => {
    addMessagesInTheChat(message);
    setTimeout(() => {
      disableLoader();
      enableLastChatbotMessage();
    }, CHAT_CONSTANTS.DELAY_TO_ENABLE_MESSAGE_IN_MS);
  };

  const sendMessageToChatbot = (message: string, conversationId?: string | null) => {
    enableLoader();

    const payload = { message: removeTextFormatting(message), conversationId, language: globalState.language };
    sendMessage({ variables: payload, fetchPolicy: 'no-cache' });

    setState((prev) => updateStateForNewMessageFromUserToChatbot(prev, message));
  };

  const handleNewUserMessage = (message: string) => {
    if (message && message.length > 0) sendMessageToChatbot(message, getConversationId(data));
  };

  const getChatbotAnswer = () => {
    if (error) setState((prev) => ({ ...prev, error: true, errorInformed: false }));
    else if (!loading && data) {
      const conversationId = data.sendMessage.conversationId;
      const commands = data.sendMessage.context.commands;
      const messagesFromTheChatbot = areValidMessages(data.sendMessage.answer)
        ? data.sendMessage.answer
        : [CHAT_MESSAGES.NOT_UNDERSTAND[globalState.language]];

      const messageAnswered = messageAlreadyAnswered(messagesFromTheChatbot, state.conversation.chatbotLastAnswer);

      setState((prev) =>
        updateStateForNewMessageAnsweredFromTheChatbot(prev, messagesFromTheChatbot, messageAnswered, commands, conversationId),
      );
    }
  };

  /**
   * Effect to enable Welcome message when the Chat is open for the first time
   */
  useEffect(handleWhenChatIsOpened, [state.open]); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Effect to disable loader if enabled in case of the first attempt fails.
   * This effect is necessary to fix the "unknown bug" reported at the react-chat-widget where the internal component
   * is render 2x or more which makes the loader enable again independently.
   */
  useEffect(() => {
    if (loaderActivatedIncorrectly(state)) disableLoader();
  }, [state.loader.active, state.loader.attemptsToDisable]); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Effect to update state with new answer received from the Chatbot.
   * This control is necessary to control the answers avoiding a "unknown bug" of duplicate messages
   */
  useEffect(getChatbotAnswer, [loading, error, data]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!state.open && !state.welcomeMessageViewed) {
    addMessagesInTheChat(CHAT_MESSAGES.WELCOME[globalState.language], false);
  }

  if (state.error && !state.errorInformed) {
    if (errorBySessionExpired(error)) sendMessageToChatbot(state.conversation.userLastMessage, null);
    else {
      addMessagesInTheChat(CHAT_MESSAGES.ERROR.SEND_MESSAGE[globalState.language]);
      setState(updateStaForInformedError);
    }
  }

  if (state.conversation.newMessage) {
    sendResponseMessage(joinMessagesByParagraph(state.conversation.chatbotLastAnswer));
    setState(updateStateToRespondNewChatbotMessage);
  }

  if (thereAreCommandsToBeExecuted(state.conversation.commands)) {
    dispatch(addNewCommands(state.conversation.commands));
    setState(updateStateToClearCommandsAddedInTheStore);
  }

  return (
    <Fragment>
      <CommandsListener />
      <ChatView handleNewUserMessage={handleNewUserMessage} language={globalState.language} handleOpenChat={handleOpenChat} />
    </Fragment>
  );
};

export default Chat;

const initialState = (): ChatState => ({
  open: false,
  welcomeMessageViewed: false,
  error: false,
  errorInformed: false,
  conversation: {
    answered: false,
    newMessage: false,
    userLastMessage: '',
    chatbotLastAnswer: [''],
    commands: [],
    conversationId: '',
  },
  loader: {
    active: false,
    attemptsToDisable: 0,
  },
});

const updateStaForInformedError = (prevState: ChatState): ChatState => ({ ...prevState, errorInformed: true });

const updateStateToRespondNewChatbotMessage = (prev: ChatState): ChatState => ({
  ...prev,
  conversation: {
    ...prev.conversation,
    newMessage: false,
    answered: true,
  },
});

const updateStateToClearCommandsAddedInTheStore = (prev: ChatState): ChatState => ({
  ...prev,
  conversation: {
    ...prev.conversation,
    commands: [],
  },
});

const updateStateWhenTheLoaderIsDisabled = (prev: ChatState): ChatState => ({
  ...prev,
  loader: {
    active: false,
    attemptsToDisable: prev.loader.attemptsToDisable + 1,
  },
});

const updateStateWhenLoaderIsEnabled = (prev: ChatState): ChatState => ({
  ...prev,
  loader: {
    ...prev.loader,
    active: true,
  },
});

const updateStateForNewMessageAnsweredFromTheChatbot = (
  prev: ChatState,
  messagesFromTheChatbot: Array<string>,
  messageAnswered: boolean,
  commands: Array<Command>,
  conversationId: string,
): ChatState => ({
  ...prev,
  conversation: {
    ...prev.conversation,

    answered: messageAnswered,
    newMessage: !messageAnswered,
    chatbotLastAnswer: messagesFromTheChatbot,
    commands,
    conversationId,
  },

  loader: {
    ...prev.loader,
    active: messageAnswered ? false : prev.loader.active,
  },
});

const updateStateForNewMessageFromUserToChatbot = (prev: ChatState, message: string): ChatState => {
  return {
    ...prev,
    error: false,
    errorInformed: false,
    conversation: {
      ...prev.conversation,
      userLastMessage: message,
    },
  };
};
