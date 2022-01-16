import { CommandStatus } from '../../../store/chat/types';
import { CSS_CLASS_NAMES } from '../constants';

/**
 * Function to return a list with no duplicate elements and filtered by unexecuted.
 *
 * @param {Array<CommandStatus>} commands
 */
export const filterUniquesAndUnexecutedCommands = (commands: Array<CommandStatus>): Array<CommandStatus> => {
  const unexecutedCommands = commands.filter((c) => !c.executed);
  const uniques: Array<CommandStatus> = [];

  const equals = (a: CommandStatus, b: CommandStatus) => a.command.type === b.command.type && a.command.value === b.command.value;

  unexecutedCommands.forEach((command) => {
    if (!uniques.find((e) => equals(e, command))) uniques.push(command);
  });

  return uniques;
};

/**
 * Function to insert the desired element as the last message in the chat chat list through the CSS class informed
 * in the root of the element or in a child node of this element.
 *
 * 1) If there are messages in the chat, find the element by the css class name.
 * 2) If the element was found and not added before, put it as the last message.
 *
 * OBS: Function needed to eliminate "unknown bug" found in external component in message duplication.
 *
 * @param {string} elementClassName: Css class name of the element to be found
 * @returns {number | undefined} elementPositionId: returns the element position id if it was added as the last element of the chat
 */
export const putHtmlNodeAsLastElementOfTheChat = (elementClassName: string): number | undefined => {
  const messages = document.getElementById(CSS_CLASS_NAMES.MESSAGES_LIST_CONTAINER)?.getElementsByClassName(CSS_CLASS_NAMES.MESSAGE);
  let elementPositionId;

  if (messages && messages.length > 0) {
    const valueToStopTheLoop = -1;
    const indexLastElement = messages.length - 1;

    let index = indexLastElement;
    let added = false;

    while (!added && index !== valueToStopTheLoop) {
      //
      const wantedElement = messages[index].getElementsByClassName(elementClassName)[0];
      const foundElementAlreadyAdded = wantedElement && index === indexLastElement;

      if (foundElementAlreadyAdded) index = valueToStopTheLoop;
      else if (wantedElement) {
        const response = addElementAfterTypingLoader(messages[index]);
        added = response.added;
        elementPositionId = response.positionId;
      } else index--;
    }
  }

  return elementPositionId;
};

/**
 * Class to add Element as the last message before the typing loader
 *
 * @param {Element} element: HTML element
 * @returns {{ added: boolean; positionId?: number }} response: return if element was added and
 */
export const addElementAfterTypingLoader = (element: Element): { added: boolean; positionId?: number } => {
  const container = document.getElementById(CSS_CLASS_NAMES.MESSAGES_LIST_CONTAINER);

  if (!container) return { added: false };

  const loaderAsLastElement = container.children[container.children.length - 1];

  container.insertBefore(element, loaderAsLastElement);
  const positionId = container.children.length - 2;
  container.children[positionId]?.classList.add(CSS_CLASS_NAMES.ENABLE_ELEMENT);

  return {
    added: true,
    positionId,
  };
};
