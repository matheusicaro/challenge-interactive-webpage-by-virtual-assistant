import { useMutation } from '@apollo/client';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { addResponseMessage, toggleMsgLoader } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import { SendMessageData, SEND_MESSAGE } from '../../graphql/queries/message';
import { globalContext } from '../../store';
import { addNewCommands } from '../../store/chat/actions';
import { Command } from '../../store/chat/types';
import ChatView from './Chat';
import CommandsListener from './CommandsListener';
import { CSS_CLASS_NAMES, CHAT_MESSAGES, CONSTANTS } from './constants';
import { ChatState, MessagePayload } from './types';

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

  const enablesWelcomeMessage = () => {
    if (!state.welcomeMessageViewed && state.open) {
      enableLastResponseMessage();
      setState((prev) => ({ ...prev, welcomeMessageViewed: true }));
    }
  };

  const sendResponseMessage = (message: string) => {
    addMessagesInTheChat(message);
    setTimeout(() => {
      disableLoader();
      enableLastResponseMessage();
    }, CONSTANTS.DELAY_TO_ENABLE_MESSAGE_IN_MS);
  };

  const handleNewUserMessage = (message: string) => {
    if (message && message.length > 0) {
      const conversationId = getConversationId(data);
      const language = globalState.language;
      message = removeMessageFormatting(message);

      if (state.errorInformed) setState((prev) => ({ ...prev, errorInformed: false }));

      sendMessage({ variables: { message, conversationId, language } });
      enableLoader();
    }
  };

  const getChatbotAnswer = () => {
    if (!error && !loading && data) {
      const messagesFromTheChatbot = data.sendMessage.answer;
      const conversationId = data.sendMessage.conversationId;
      const commands = data.sendMessage.context.commands;

      const messageAlreadyAnswered = messagesFromTheChatbot.join() === state.conversation.chatbotLastAnswer.join();

      setState((prev) => ({
        ...prev,
        conversation: {
          ...prev.conversation,

          answered: messageAlreadyAnswered,
          newMessage: !messageAlreadyAnswered,
          chatbotLastAnswer: messagesFromTheChatbot,
          commands,
          conversationId,
        },
      }));
    }
  };

  /**
   * Effect to enable Welcome message when the Chat is open for the first time
   */
  useEffect(enablesWelcomeMessage, [state.open]); // eslint-disable-line react-hooks/exhaustive-deps

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

  if (error && !state.errorInformed) {
    addMessagesInTheChat(CHAT_MESSAGES.ERROR.SEND_MESSAGE[globalState.language]);
    setState(updateStaForInformedError);
  }

  if (state.conversation.newMessage) {
    sendResponseMessage(joinMessagesByParagraph(state.conversation.chatbotLastAnswer));
    setState(updateStateForNewMessageAnsweredFromTheChatbot);
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
  conversation: {
    answered: false,
    newMessage: false,
    chatbotLastAnswer: [''],
    commands: [],
    conversationId: '',
  },
  errorInformed: false,
  loader: {
    active: false,
    attemptsToDisable: 0,
  },
  open: false,
  welcomeMessageViewed: false,
});

/**
 * Function to add Message at the external chat component - Widget
 *
 * @param {string} message
 * @param {boolean} addDelay: add delay to show message
 */
const addMessagesInTheChat = (message: string, addDelay = true) => {
  if (addDelay) setTimeout(() => addResponseMessage(message), CONSTANTS.DELAY_TO_ADD_MESSAGE_IN_MS);
  else addResponseMessage(message);
};

/**
 * Function to enable message to be viewed on the chat through manipulation of the DOM
 */
const enableLastResponseMessage = () => {
  const elements = document.getElementById(CSS_CLASS_NAMES.MESSAGES_LIST_CONTAINER)?.getElementsByClassName(CSS_CLASS_NAMES.MESSAGE);

  if (elements && elements.length > 0) {
    elements[elements.length - 1].classList.add(CSS_CLASS_NAMES.ENABLE_ELEMENT);
  }
};

/**
 * Function to check if element loader is active even
 */
const loaderIsEnabled = (): boolean => {
  const elements = document.getElementById(CSS_CLASS_NAMES.MESSAGES_LIST_CONTAINER)?.getElementsByClassName(CSS_CLASS_NAMES.LOADER);

  return !!elements && elements[0].classList.contains(CSS_CLASS_NAMES.ELEMENT_ACTIVATED);
};

const getConversationId = (data: MessagePayload): string => {
  return data ? data.sendMessage.conversationId : '';
};

const removeMessageFormatting = (message: string): string => message?.replaceAll('\n', ' ');

const joinMessagesByParagraph = (messages: Array<string>): string => messages.join('\n\n');

const thereAreCommandsToBeExecuted = (commands: Array<Command>): boolean => commands && commands.length !== 0;

const updateStaForInformedError = (prevState: ChatState): ChatState => ({ ...prevState, errorInformed: true });

const updateStateForNewMessageAnsweredFromTheChatbot = (prev: ChatState): ChatState => ({
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
