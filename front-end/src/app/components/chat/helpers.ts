import { ApolloError } from '@apollo/client';
import { addResponseMessage } from 'react-chat-widget';
import { Command } from '../../store/chat/types';
import { CONSTANTS, CSS_CLASS_NAMES } from './constants';
import { MessagePayload } from './types';

/**
 * Function to compare if strings are equals.
 *
 * @param {Array<string>} firstMessage
 * @param {Array<string>} secondString
 *
 * @returns {boolean}
 */
const stringContentsAreTheSame = (firstString: string, secondString: string | null): boolean => {
  if (firstString === null && secondString === null) return true;

  if (secondString === null) return false;

  const removeSpacesOrSpecialCharacters = (str: string) => str.replace(/[\s|-]+/g, '');

  return removeSpacesOrSpecialCharacters(firstString) === removeSpacesOrSpecialCharacters(secondString);
};

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
 * @returns {number} index of the element enabled in the messages list container
 */
export const enableLastResponseMessage = (): number | null => {
  const elements = document.getElementById(CSS_CLASS_NAMES.MESSAGES_LIST_CONTAINER)?.getElementsByClassName(CSS_CLASS_NAMES.MESSAGE);

  let indexElementEnabled = null;

  if (elements && elements.length > 0) {
    indexElementEnabled = elements.length - 1;
    elements[indexElementEnabled].classList.add(CSS_CLASS_NAMES.ENABLE_ELEMENT);
  }

  moveChatScrollToEnd();

  return indexElementEnabled;
};

/**
 * Function to move Chat scroll to the end
 *
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

/**
 * Function to check if error received from the ApolloServer is by session expired
 *
 * @param {Array<Command>} commands
 * @returns {boolean}
 */
export const errorBySessionExpired = (error: ApolloError) => {
  if (!error.graphQLErrors) return false;

  return error.graphQLErrors.some((err) => err.message === 'Invalid Session' || err.extensions?.code === 404);
};

/**
 * Function to check if new message received from the ChatbotServer was already answered.
 *
 * This is necessary due to DOM manipulation to deal with an "unknown bug" in the external Chat component in message duplication.
 *
 * @param {Array<string>} newMessages
 * @param {Array<string>} lastMessages
 *
 * @returns {boolean}
 */
export const messageAlreadyAnswered = (newMessages: Array<string>, lastMessages: Array<string>): boolean => {
  if (!(newMessages.join() === lastMessages.join())) return false;

  const elements = document.getElementById(CSS_CLASS_NAMES.MESSAGES_LIST_CONTAINER)?.getElementsByClassName(CSS_CLASS_NAMES.MESSAGE);

  if (!elements) return false;

  const getText = (element: Element) => element.getElementsByClassName(CSS_CLASS_NAMES.MESSAGE_TEXT)[0]?.textContent;

  let indexOfLastElement = elements.length - 1;
  let validated = false;
  let messageAlreadyAnswered = false;

  while (!validated) {
    const message = elements[indexOfLastElement];

    if (message) {
      const isMessageFromChatbot = !message.classList.contains(CSS_CLASS_NAMES.MESSAGE_FROM_USER_CLIENT);

      if (isMessageFromChatbot) {
        messageAlreadyAnswered = stringContentsAreTheSame(newMessages.join(''), getText(message));
      }

      validated = true;
    } else {
      indexOfLastElement--;
    }
  }

  return messageAlreadyAnswered;
};

/**
 * Function to check if messages are valid.
 *
 * @param {Array<string>} messages
 * @returns {boolean}
 */
export const areValidMessages = (messages: Array<string>) =>
  messages && messages.length > 0 && messages.some((m) => m && m !== '' && m !== ' ');

/**
 * Function to check if messages are valid.
 *
 * @param {Array<string>} messages
 * @returns {boolean}
 */
export const enableChatHistory = (messageIdList: Array<number>) => {
  const messages = document.getElementById(CSS_CLASS_NAMES.MESSAGES_LIST_CONTAINER);
  messageIdList.forEach((id) => messages?.children[id]?.classList.add(CSS_CLASS_NAMES.ENABLE_ELEMENT));
};
