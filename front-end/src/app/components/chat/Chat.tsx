import React from 'react';
import { Widget } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import styled from 'styled-components';
import AvatarImg from '../../assets/images/avatar.png';
import AvatarSmallImg from '../../assets/images/avatar-small.png';

type Props = {
  handleNewUserMessage: (message: string) => void;
};

const ChatView: React.FC<Props> = (props) => {
  return (
    <Container>
      <Widget
        titleAvatar={AvatarImg}
        launcherOpenImg={AvatarSmallImg}
        handleNewUserMessage={props.handleNewUserMessage}
        title="Neo Assistant"
        subtitle="Neo Financial Help Centre"
      />
    </Container>
  );
};

export default ChatView;

const Container = styled.section`
  .rcw-picker-btn {
    display: none;
  }

  .rcw-sender > button {
    background-color: ${({ theme }) => theme.colors.darkColor};

    align-self: center;
    & > img {
      margin-left: 30px;
    }
  }

  .rcw-conversation-container {
    .rcw-header,
    .rcw-sender,
    .rcw-close-button {
      background-color: ${({ theme }) => theme.colors.darkColor} !important;
    }
  }

  .rcw-new-message,
  .rcw-messages-container {
    background-color: ${({ theme }) => theme.colors.background.chat.messages.container};
  }

  .rcw-messages-container {
    font-size: 0.8em;
    line-height: 1.2em;
  }

  .rcw-message {
    .rcw-response .rcw-message-text {
      background-color: ${({ theme }) => theme.colors.background.chat.messages.bot};
    }

    .rcw-client .rcw-message-text {
      background-color: ${({ theme }) => theme.colors.darkColor};
      color: ${({ theme }) => theme.colors.text.chat.userMessage};
    }
  }

  .rcw-launcher {
    background-color: ${({ theme }) => theme.colors.darkColor};

    & > img {
      width: 40px;
    }

    .rcw-close-launcher {
      width: 20px;
    }
  }
`;
