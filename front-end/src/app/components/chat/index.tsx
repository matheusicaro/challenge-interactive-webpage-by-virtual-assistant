import { useMutation } from '@apollo/client';
import React, { useContext, useEffect } from 'react';
import { addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import { useHistory } from 'react-router-dom';
import { Message, SEND_MESSAGE } from '../../graphql/queries/message';
import { globalContext } from '../../store';
import ChatView from './Chat';
import CHAT_CONSTANTS from './constants';

/*
 *
 * https://github.com/Wolox/react-chat-widget
 */
const Chat: React.FC = () => {
  const { globalState } = useContext(globalContext);
  const [sendMessage, { error, data }] = useMutation<Message>(SEND_MESSAGE);
  const history = useHistory();

  useEffect(() => {
    addResponseMessage(CHAT_CONSTANTS.WELCOME[globalState.language]);
  }, []);

  const handleNewUserMessage = (message: string) => {
    sendMessage({ variables: { message, conversationId: data?.conversationId } });
  };

  if (error) {
    addResponseMessage(CHAT_CONSTANTS.ERROR.SEND_MESSAGE[globalState.language]);
  } else if (data && data.answer) {
    addResponseMessage(data.answer);
  }

  return <ChatView handleNewUserMessage={handleNewUserMessage} language={globalState.language} />;
};

export default Chat;
