import { useMutation } from '@apollo/client';
import React, { useContext, useEffect, useState } from 'react';
import { addResponseMessage, toggleMsgLoader } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import { useHistory } from 'react-router-dom';
import { SendMessageData, SEND_MESSAGE } from '../../graphql/queries/message';
import { globalContext } from '../../store';
import { LanguageState } from '../../store/actions/language';
import ChatView from './Chat';
import CHAT_CONSTANTS from './constants';

/*
 *
 * https://github.com/Wolox/react-chat-widget
 */
const Chat: React.FC = () => {
  const [state, setState] = useState({
    open: false,
    welcomeMessageViewed: false,
    loader: false,
    errorInformed: false,
  });

  const { globalState } = useContext(globalContext);
  const [sendMessage, { error, data, loading }] = useMutation<SendMessageData>(SEND_MESSAGE);
  const history = useHistory();

  /**
   * Effect to send Welcome message in the first render
   */
  useEffect(() => {
    sendWelcomeMessage(globalState.language);
  }, []);

  /**
   * Effect for enable Welcome message when the Chat is open for the first time
   */
  useEffect(() => {
    if (!state.welcomeMessageViewed && state.open) {
      enableLastResponseMessage();
      setState((prev) => ({ ...prev, welcomeMessageViewed: true }));
    }
  }, [state.open]);

  const enableLoader = () => {
    toggleMsgLoader();
    setState((prev) => ({ ...prev, loader: true }));
  };

  const disableLoader = () => {
    toggleMsgLoader();
    setState((prev) => ({ ...prev, loader: false }));
  };

  const handleNewUserMessage = (message: string) => {
    if (state.errorInformed) setState((prev) => ({ ...prev, errorInformed: false }));
    sendMessage({ variables: { message, conversationId: getConversationId(data) } });
    enableLoader();
  };

  const onClickChat = () => setState((prev) => ({ ...prev, open: !prev.open }));

  if (error && !state.errorInformed) {
    sendResponseMessage(CHAT_CONSTANTS.ERROR.SEND_MESSAGE[globalState.language], disableLoader);
    setState((prev) => ({ ...prev, errorInformed: true }));
  } else if (data && data.sendMessage) {
    data.sendMessage.answer.map((message) => sendResponseMessage(message, disableLoader));
  }

  return <ChatView handleNewUserMessage={handleNewUserMessage} language={globalState.language} onClick={onClickChat} />;
};

export default Chat;

/**
 * Function to send the Welcome Message
 *
 * @param {LanguageState} language: message language
 */
const sendWelcomeMessage = (language: LanguageState) => {
  addResponseMessage(CHAT_CONSTANTS.WELCOME[language]);
};

/**
 * Function to add response message from the chatbot.
 * 1 - add message to chat view list
 * 2 - disable typing loader
 * 3 - enable message to be view on the chat
 *
 * @param {string} message: response message
 * @param disableLoader: function to disable typing loader
 */
const sendResponseMessage = (message: string, disableLoader: () => void) => {
  console.log(message);
  setTimeout(() => addResponseMessage(message), 1000);
  setTimeout(() => {
    disableLoader();
    enableLastResponseMessage();
  }, 2000);
};

/**
 * Function to enable message to be viewed on the chat through manipulation of the DOM
 */
const enableLastResponseMessage = () => {
  const elements = document.getElementById('messages')?.getElementsByClassName('rcw-message');
  if (elements && elements.length > 0) elements[elements.length - 1].classList.add('enabled');
};

const getConversationId = (data: SendMessageData | null | undefined): string => {
  return data ? data.sendMessage.conversationId : '';
};
