import React from 'react';
import { Widget } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import styled from 'styled-components';
import AvatarImg from '../../assets/images/avatar.png';
import AvatarSmallImg from '../../assets/images/avatar-small.png';
import AvatarHeartLovesImg from '../../assets/images/neo-heart.png';
import { Language } from '../../store/language/types';
import { CSS_CLASS_NAMES, CHAT_MESSAGES } from './constants';

type Props = {
  handleNewUserMessage: (message: string) => void;
  language: Language;
  handleOpenChat?: (chatIsOpen: boolean) => void;
};

const ChatView: React.FC<Props> = (props) => {
  return (
    <Container>
      <Widget
        profileAvatar={AvatarHeartLovesImg}
        titleAvatar={AvatarImg}
        launcherOpenImg={AvatarSmallImg}
        handleNewUserMessage={props.handleNewUserMessage}
        title={CHAT_MESSAGES.TITLE[props.language]}
        subtitle={CHAT_MESSAGES.SUBTITLE[props.language]}
        senderPlaceHolder={CHAT_MESSAGES.SENDER_PLACE_HOLDER[props.language]}
        handleToggle={props.handleOpenChat}
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

    @media (max-width: 380px) {
      min-width: 98vw;

      .rcw-title {
        font-size: 0.9em;
      }
    }

    @media (max-width: 380px) {
      .rcw-title {
        font-size: 0.7em;
      }
      .rcw-header {
        & > span {
          font-size: 0.9em;
        }
      }
    }
  }

  .rcw-new-message,
  .rcw-messages-container {
    background-color: ${({ theme }) => theme.colors.background.chat.messages.container};
  }

  .rcw-new-message,
  .rcw-messages-container {
    font-size: 0.8em;
    line-height: 1.2em;
  }

  .loader-container {
    background-color: ${({ theme }) => theme.colors.background.chat.messages.bot};
  }

  .${CSS_CLASS_NAMES.MESSAGE} {
    display: none !important;

    .rcw-snippet,
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

  .rcw-avatar {
    width: 70px;
    height: 70px;
  }

  .rcw-message-client {
    display: flex !important;
  }

  .${CSS_CLASS_NAMES.ENABLE_ELEMENT} {
    display: flex !important;
  }
`;
