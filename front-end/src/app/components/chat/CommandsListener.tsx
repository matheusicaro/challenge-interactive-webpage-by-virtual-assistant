import React, { Fragment, useContext } from 'react';
import { COMMANDS_TYPES } from '../../graphql/queries/message';
import { globalContext } from '../../store';
import { CommandStatus } from '../../store/chat/types';
import { useHistory } from 'react-router-dom';
import { commandsExecuted } from '../../store/chat/actions';
import { addLinkSnippet } from 'react-chat-widget';
import { CSS_CLASS_NAMES } from './constants';

type Props = {
  children?: never;
};

const PREFIX_DEEP_LINK = 'deeplink:/';

const CommandsListener: React.FC<Props> = (props) => {
  const { globalState, dispatch } = useContext(globalContext);
  const history = useHistory();

  const goToPath = (path: string) => history.push(path);

  const runCommand = ({ command }: CommandStatus): CommandStatus => {
    switch (command.type) {
      //
      case COMMANDS_TYPES.REDIRECT_TO_PAGE:
        goToPath(getPathFromDeepLink(command.value));
        return { executed: true, command };

      case COMMANDS_TYPES.SHOW_LINK:
        addMessageWithLinkInTheChat(command.value);
        return { executed: true, command };

      default:
        return { executed: false, command };
    }
  };

  const commands = globalState.chat.commands.filter(commandsNotExecuted).map(runCommand);

  if (commands.length > 0) dispatch(commandsExecuted(commands));

  return <Fragment />;
};

export default CommandsListener;

const getPathFromDeepLink = (deepLink: string) => deepLink?.split(PREFIX_DEEP_LINK)[1];

const commandsNotExecuted = (command: CommandStatus): boolean => !command.executed;

/**
 * Function to show custom message in chat widget with navigation link
 *
 * @param {string} link: url link to be shown in message
 */
const addMessageWithLinkInTheChat = (link: string) => {
  addLinkSnippet({ target: '_blank', link, title: '' });
  putHtmlNodeAsLastElementOfTheChat(CSS_CLASS_NAMES.LINK_MESSAGE);
};

/**
 * Function to insert the desired element as the last message in the chat chat list through the CSS class informed
 * in the root of the element or in a child node of this element.
 *
 * OBS: Function needed to eliminate "unknown bug" found in external component in message duplication.
 *
 * @param {string} elementClassName: Css class name of the element to be found
 */
const putHtmlNodeAsLastElementOfTheChat = (elementClassName: string) => {
  const messages = document.getElementById(CSS_CLASS_NAMES.MESSAGES_LIST_CONTAINER)?.getElementsByClassName(CSS_CLASS_NAMES.MESSAGE);

  if (messages && messages.length > 0) {
    for (let i = 0; i < messages.length; i++) {
      const wantedElement = messages[i].getElementsByClassName(elementClassName)[0];

      if (wantedElement) {
        const container = document.getElementById(CSS_CLASS_NAMES.MESSAGES_LIST_CONTAINER);

        if (container) {
          container.append(messages[i]);
          container.lastElementChild?.classList.add(CSS_CLASS_NAMES.ENABLE_ELEMENT);
        }
      }
    }
  }
};
