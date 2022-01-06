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
    background-color: ${({ theme }) => theme.colors.background.primary};

    & > img {
      width: 40px;
    }

    .rcw-close-launcher {
      width: 20px;
    }
  }
`;
