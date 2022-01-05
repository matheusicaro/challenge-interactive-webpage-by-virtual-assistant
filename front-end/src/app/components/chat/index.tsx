import { useMutation } from '@apollo/client';
import React, { useEffect } from 'react';
import { addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import { Message, SEND_MESSAGE } from '../../graphql/queries/message';
import ChatView from './Chat';

const ERROR_SEND_MESSAGE = `I encountered an error while trying to process your message.
Let's try again? please tell me how can i help you`;

/*
 *
 * https://github.com/Wolox/react-chat-widget
 */
const Chat: React.FC = () => {
  const [sendMessage, { error, data }] = useMutation<Message>(SEND_MESSAGE);

  useEffect(() => {
    addResponseMessage('Welcome to this **awesome** chat!');
  }, []);

  const handleNewUserMessage = (message: string) => sendMessage({ variables: { message } });

  if (error || !data || !data.answer) {
    addResponseMessage(ERROR_SEND_MESSAGE);
  } else {
    addResponseMessage(data.answer);
  }

  return <ChatView handleNewUserMessage={handleNewUserMessage} />;
};

export default Chat;
