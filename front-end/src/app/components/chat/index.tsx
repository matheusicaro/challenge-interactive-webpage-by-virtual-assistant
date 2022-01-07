import { useMutation } from '@apollo/client';
import React, { useContext, useEffect } from 'react';
import { addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import { useHistory } from 'react-router-dom';
import { Message, SEND_MESSAGE } from '../../graphql/queries/message';
import { globalContext } from '../../store';
import ChatView from './Chat';

const ERROR_SEND_MESSAGE = `I encountered an error while trying to process your message.
Let's try again? please tell me how can i help you`;

/*
 *
 * https://github.com/Wolox/react-chat-widget
 */
const Chat: React.FC = () => {
  const { globalState } = useContext(globalContext);
  const [sendMessage, { error, data }] = useMutation<Message>(SEND_MESSAGE);
  const history = useHistory();

  useEffect(() => {
    addResponseMessage('Welcome to this **awesome** chat!');
  }, []);

  const handleNewUserMessage = (message: string) => {
    if (message === '1') history.push('/why-neo');
    if (message === '2') history.push('/why-neo/did-you-know');
    if (message === '3') history.push('/why-neo/plus-we-are');
    if (message === '4') history.push('/who-we-are/');
    if (message === '5') history.push('/who-we-are/get-to-know-us');
    if (message === '6') history.push('/who-we-are/our-founders');
    if (message === '7') history.push('/our-values');
    if (message === '8') history.push('/our-values/join-the-neo-team');
    else sendMessage({ variables: { message } });
  };

  if (error || !data || !data.answer) {
    addResponseMessage(ERROR_SEND_MESSAGE);
  } else {
    addResponseMessage(data.answer);
  }

  return <ChatView handleNewUserMessage={handleNewUserMessage} language={globalState.language} />;
};

export default Chat;
