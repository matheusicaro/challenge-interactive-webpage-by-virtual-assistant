import { useMutation } from '@apollo/client';
import React, { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import { SEND_MESSAGE } from '../../graphql/queries/message';

/*
 *
 * //github.com/Wolox/react-chat-widget
 */
const Chat: React.FC = () => {
  const [sendMessage, { loading, error, data }] = useMutation(SEND_MESSAGE);

  useEffect(() => {
    addResponseMessage('Welcome to this **awesome** chat!');
  }, []);

  const handleNewUserMessage = (message: string) => {
    sendMessage({ variables: { message } });

    console.log(`New message incoming! ${message}`);
    addResponseMessage(`my answer to: ${message}`);
  };

  addResponseMessage(JSON.stringify(data));

  return (
    <section>
      {loading && <h1>loading ...</h1>}
      {error && <h1>error ...</h1>}
      <Widget handleNewUserMessage={handleNewUserMessage} title="My new awesome title" subtitle="And my cool subtitle" />
    </section>
  );
};

export default Chat;
