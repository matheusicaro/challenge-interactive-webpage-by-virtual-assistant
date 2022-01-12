import { useMutation } from '@apollo/client';
import React, { useContext, useEffect, useState } from 'react';
import { addResponseMessage, toggleMsgLoader } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import { useHistory } from 'react-router-dom';
import { SendMessageData, SEND_MESSAGE } from '../../graphql/queries/message';
import { globalContext } from '../../store';
import { addNewCommands } from '../../store/chat/actions';
import { Language } from '../../store/language/types';
import ChatView from './Chat';
import CHAT_CONSTANTS from './constants';
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
    setState((prev) => ({ ...prev, loader: { ...prev.loader, active: true } }));
  };

  const disableLoader = () => {
    toggleMsgLoader();
    setState((prev) => ({ ...prev, loader: { active: false, attemptsToDisable: prev.loader.attemptsToDisable + 1 } }));
  };

  const handleNewUserMessage = (message: string) => {
    if (message && message.length > 0) {
      const conversationId = getConversationId(data);
      const language = globalState.language;
      message = message.replaceAll('\n', ' ');

      if (state.errorInformed) setState((prev) => ({ ...prev, errorInformed: false }));

      sendMessage({ variables: { message, conversationId, language } });
      enableLoader();
    }
  };

  const sendResponseMessage = (message: string) => {
    setTimeout(() => addResponseMessage(message), 1000);
    setTimeout(() => {
      disableLoader();
      enableLastResponseMessage();
    }, 2000);
  };

  /**
   * Effect to enable Welcome message when the Chat is open for the first time
   */
  useEffect(() => {
    if (!state.welcomeMessageViewed && state.open) {
      enableLastResponseMessage();
      setState((prev) => ({ ...prev, welcomeMessageViewed: true }));
    }
  }, [state.open]); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Effect to disable loader if enabled in case of the first attempt fails.
   * This effect is necessary to fix the bug reported at the react-chat-widget where the internal component
   * is render 2x or more which makes the loader enable again independently.
   */
  useEffect(() => {
    if (loaderActivatedIncorrectly(state)) disableLoader();
  }, [state.loader.active, state.loader.attemptsToDisable]); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Effect to update state with new answer received from the Chatbot.
   * This control is necessary to control the answers avoiding a bug of duplicate messages
   */
  useEffect(() => {
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
  }, [loading, error, data]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!state.open && !state.welcomeMessageViewed) {
    sendWelcomeMessage(globalState.language);
  }

  if (error && !state.errorInformed) {
    sendResponseMessage(CHAT_CONSTANTS.ERROR.SEND_MESSAGE[globalState.language]);
    setState((prev) => ({ ...prev, errorInformed: true }));
  }

  if (state.conversation.newMessage) {
    const message = state.conversation.chatbotLastAnswer.join('\n');
    sendResponseMessage(message);
    setState((prev) => ({ ...prev, conversation: { ...prev.conversation, newMessage: false, answered: true } }));
  }

  if (state.conversation.commands && state.conversation.commands.length !== 0) {
    setState((prev) => ({ ...prev, conversation: { ...prev.conversation, commands: [] } }));
    dispatch(addNewCommands(state.conversation.commands));
  }

  return <ChatView handleNewUserMessage={handleNewUserMessage} language={globalState.language} handleOpenChat={handleOpenChat} />;
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
 * Function to send the Welcome Message
 *
 * @param {Language} language: message language
 */
const sendWelcomeMessage = (language: Language) => {
  addResponseMessage(CHAT_CONSTANTS.WELCOME[language]);
};

/**
 * Function to enable message to be viewed on the chat through manipulation of the DOM
 */
const enableLastResponseMessage = () => {
  const elements = document.getElementById('messages')?.getElementsByClassName('rcw-message');
  if (elements && elements.length > 0) elements[elements.length - 1].classList.add('enabled');
};

/**
 * Function to check if element loader is active even
 */
const loaderIsEnabled = (): boolean => {
  const elements = document.getElementById('messages')?.getElementsByClassName('loader');
  return !!elements && elements[0].classList.contains('active');
};

const getConversationId = (data: MessagePayload): string => {
  return data ? data.sendMessage.conversationId : '';
};
