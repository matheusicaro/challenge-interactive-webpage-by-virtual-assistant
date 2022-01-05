import { useMutation } from '@apollo/client';
import React, { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import styled from 'styled-components';
import { SEND_MESSAGE } from '../../graphql/queries/message';
import AvatarImg from '../../assets/images/avatar.png';
import AvatarSmallImg from '../../assets/images/avatar-small.png';

/*
 *
 * https://github.com/Wolox/react-chat-widget
 */
const Chat: React.FC = () => {
  const [sendMessage, { loading, error, data }] = useMutation(SEND_MESSAGE);

  useEffect(() => {
    addResponseMessage('Welcome to this **awesome** chat!');
  }, []);

  const handleNewUserMessage = (message: string) => {
    console.log(`New message incoming! ${message}`);

    sendMessage({ variables: { message } });
  };

  addResponseMessage(data ? JSON.stringify(data) : 'nothing here---');

  return (
    <Container>
      {loading && <h1>loading ...</h1>}
      {error && <h1>error ...</h1>}
      <Widget
        titleAvatar={AvatarImg}
        launcherOpenImg={AvatarSmallImg}
        handleNewUserMessage={handleNewUserMessage}
        title="Neo Assistant"
        subtitle="Neo Financial Help Centre"
      />
    </Container>
  );
};

export default Chat;

const Container = styled.section`
  .rcw-picker-btn {
    display: none;
  }

  .rcw-sender > button {
    background-color: ${({ theme }) => theme.colors.background.primaryReverse};

    align-self: center;
    & > img {
      margin-left: 30px;
    }
  }

  .rcw-conversation-container {
    .rcw-header,
    .rcw-sender,
    .rcw-close-button {
      background-color: ${({ theme }) => theme.colors.background.primaryReverse} !important;
    }
    .rcw-header {
      color: ${({ theme }) => theme.colors.text.chat.header};
    }
  }

  .rcw-messages-container {
    background-color: ${({ theme }) => theme.colors.background.chat.messages.container};
  }

  .rcw-message {
    .rcw-response .rcw-message-text {
      background-color: ${({ theme }) => theme.colors.background.chat.messages.bot};
    }

    .rcw-client .rcw-message-text {
      background-color: ${({ theme }) => theme.colors.background.primaryReverse};
      color: ${({ theme }) => theme.colors.text.chat.userMessage};
    }
  }

  .rcw-launcher {
    background-color: ${({ theme }) => theme.colors.background.primaryReverse};

    & > img {
      width: 40px;
    }

    .rcw-close-launcher {
      width: 20px;
    }
  }
`;
