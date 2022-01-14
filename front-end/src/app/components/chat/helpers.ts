import { addResponseMessage } from 'react-chat-widget';
import { Command } from '../../store/chat/types';
import { CONSTANTS, CSS_CLASS_NAMES } from './constants';
import { MessagePayload } from './types';

/**
 * Function to add Message at the external chat component - Widget
 *
 * @param {string} message
 * @param {boolean} addDelay: add delay to show message
 */
export const addMessagesInTheChat = (message: string, addDelay = true) => {
  if (addDelay) setTimeout(() => addResponseMessage(message), CONSTANTS.DELAY_TO_ADD_MESSAGE_IN_MS);
  else addResponseMessage(message);
};

/**
 * Function to enable message to be viewed on the chat through manipulation of the DOM
 *
 */
export const enableLastResponseMessage = () => {
  const elements = document.getElementById(CSS_CLASS_NAMES.MESSAGES_LIST_CONTAINER)?.getElementsByClassName(CSS_CLASS_NAMES.MESSAGE);

  if (elements && elements.length > 0) {
    elements[elements.length - 1].classList.add(CSS_CLASS_NAMES.ENABLE_ELEMENT);
  }

  moveChatScrollToEnd();
};

/**
 * This is necessary due to DOM manipulation to deal with an "unknown bug"
 * in the external Chat component in message duplication.
 *
 */
export const moveChatScrollToEnd = () => {
  const element = document.getElementById(CSS_CLASS_NAMES.MESSAGES_LIST_CONTAINER);
  element?.scrollTo(0, element.scrollHeight);
};

/**
 * Function to check if element loader is active even
 *
 */
export const loaderIsEnabled = (): boolean => {
  const elements = document.getElementById(CSS_CLASS_NAMES.MESSAGES_LIST_CONTAINER)?.getElementsByClassName(CSS_CLASS_NAMES.LOADER);

  return !!elements && elements[0].classList.contains(CSS_CLASS_NAMES.ELEMENT_ACTIVATED);
};

/**
 * Function to get conversation id in the message payload
 *
 * @param {MessagePayload} payload
 * @returns {string} conversationId
 */
export const getConversationId = (payload: MessagePayload): string => {
  return payload ? payload.sendMessage.conversationId : '';
};

/**
 * Function to remove text formatting such as line-break
 *
 * @param {string} text
 * @returns {string}
 */
export const removeTextFormatting = (text: string): string => text?.replaceAll('\n', ' ');

/**
 * Function to join messages by paragraph adding line-break
 *
 * @param {Array<string>} messages
 * @returns {string} message
 */
export const joinMessagesByParagraph = (messages: Array<string>): string => messages.join('\n\n');

/**
 * Function to check if command is empty
 *
 * @param {Array<Command>} commands
 * @returns {boolean}
 */
export const thereAreCommandsToBeExecuted = (commands: Array<Command>): boolean => commands && commands.length !== 0;
