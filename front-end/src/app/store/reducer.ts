import { ChatActionTypes } from './chat/actions';
import { LanguageActionTypes } from './language/actions';
import { ActionType, GlobalState } from './types';
import { Language } from './language/types';
import { Command, CommandStatus } from './chat/types';

const Reducer = (state: GlobalState, action: ActionType<any>): GlobalState => {
  switch (action.type) {
    case LanguageActionTypes.CHANGE_LANGUAGE:
      return changeLanguage(action.payload, state);

    case ChatActionTypes.ADD_NEW_COMMANDS:
      return newChatCommands(action.payload, state);

    case ChatActionTypes.COMMANDS_EXECUTED:
      return commandsExecuted(action.payload, state);

    default:
      return state;
  }
};

export default Reducer;

/**
 * Function to return new state with new language from the payload
 *
 * @param {Language} payload
 * @param {GlobalState} currentState
 * @returns new state updated with new language
 */
const changeLanguage = (payload: Language, currentState: GlobalState): GlobalState => ({
  ...currentState,
  language: payload,
});

/**
 * Function to return new state with new commands received from the Chatbot
 *
 * @param {Array<Command>} payload
 * @param {GlobalState} currentState
 * @returns new state updated with new commands to be executed
 */
const newChatCommands = (payload: Array<Command>, prevState: GlobalState): GlobalState => ({
  ...prevState,
  chat: {
    commands: [...prevState.chat.commands].concat(payload.map((command) => ({ executed: false, command }))),
  },
});

/**
 * Function to return new state with the new command which was executed with success or failed
 *
 * @param {CommandStatus} payload: command with status if was executed or not.
 * @param {GlobalState} currentState
 * @returns new state updated with a new list of commands executed
 */
const commandsExecuted = (payload: Array<CommandStatus>, prevState: GlobalState): GlobalState => {
  //
  const updateCommandStatus = (status: CommandStatus) => {
    const executed = payload.find((statusExecuted) => statusExecuted.command.type === status.command.type);

    if (executed) return executed;

    return status;
  };

  return {
    ...prevState,
    chat: {
      commands: prevState.chat.commands.map(updateCommandStatus),
    },
  };
};
