import React from 'react';
import { Widget } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import styled from 'styled-components';
import AvatarImg from '../../assets/images/avatar.png';
import AvatarSmallImg from '../../assets/images/avatar-small.png';
import { LanguageState } from '../../store/actions/language';
import CHAT_CONSTANTS from './constants';

type Props = {
  handleNewUserMessage: (message: string) => void;
  language: LanguageState;
};

const ChatView: React.FC<Props> = (props) => {
  return (
    <Container>
      <Widget
        profileAvatar={AvatarImg}
        titleAvatar={AvatarImg}
        launcherOpenImg={AvatarSmallImg}
        handleNewUserMessage={props.handleNewUserMessage}
        title={CHAT_CONSTANTS.TITLE[props.language]}
        subtitle={CHAT_CONSTANTS.SUBTITLE[props.language]}
        senderPlaceHolder={CHAT_CONSTANTS.SENDER_PLACE_HOLDER[props.language]}
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
