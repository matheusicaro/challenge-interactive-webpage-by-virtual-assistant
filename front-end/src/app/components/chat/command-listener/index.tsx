import React, { Fragment, useContext } from 'react';
import { COMMANDS_TYPES } from '../../../graphql/queries/message';
import { globalContext } from '../../../store';
import { CommandStatus } from '../../../store/chat/types';
import { useHistory } from 'react-router-dom';
import { addNewChatbotPositionMessageId, commandsExecuted } from '../../../store/chat/actions';
import { filterUniquesAndUnexecutedCommands, moveScrollTo, putHtmlNodeAsLastElementOfTheChat } from './helpers';
import { addLinkSnippet } from 'react-chat-widget';
import { CSS_CLASS_NAMES } from '../constants';
import { moveChatScrollToEnd } from '../helpers';

type Props = {
  children?: never;
};

const CommandsListener: React.FC<Props> = (props) => {
  const { globalState, dispatch } = useContext(globalContext);
  const history = useHistory();

  const goToPath = (path: string) => {
    const userIsOnTheCurrentPath = history.location.pathname === path;
    userIsOnTheCurrentPath ? moveScrollTo(path) : history.push(path);
  };

  const runCommand = ({ command }: CommandStatus): CommandStatus => {
    switch (command.type) {
      //
      case COMMANDS_TYPES.REDIRECT_TO_PAGE:
        goToPath(getPathFromDeepLink(command.value));
        return { executed: true, command };

      case COMMANDS_TYPES.SHOW_LINK:
        addMessageWithLinkInTheChat(command.value, (messageId: number) => dispatch(addNewChatbotPositionMessageId(messageId)));
        return { executed: true, command };

      default:
        return { executed: false, command };
    }
  };

  const commands = filterUniquesAndUnexecutedCommands(globalState.chat.commands).map(runCommand);

  if (commands.length > 0) dispatch(commandsExecuted(commands));

  return <Fragment />;
};

export default CommandsListener;

/**
 * Function to get path from deep link.
 *
 * @param {Element} deepLink: 'deeplink://sub-path/as-deep-link'
 * @returns {string} path: '/sub-path/as-deep-link'
 */
export const getPathFromDeepLink = (deepLink: string) => deepLink?.split('deeplink:/')[1];

/**
 * Function to show custom message in chat widget with navigation link
 *
 * @param {string} link: url link to be shown in message
 * @param {function} callback: function to be called with the element position Id added in the chat if the element was added with success
 */
export const addMessageWithLinkInTheChat = (link: string, callBack?: (elementPositionId: number) => void) => {
  addLinkSnippet({ target: '_blank', link, title: '' });
  setTimeout(() => {
    const elementPositionId = putHtmlNodeAsLastElementOfTheChat(CSS_CLASS_NAMES.LINK_MESSAGE);
    moveChatScrollToEnd();

    if (elementPositionId && callBack) callBack(elementPositionId);
  }, 2000);
};
