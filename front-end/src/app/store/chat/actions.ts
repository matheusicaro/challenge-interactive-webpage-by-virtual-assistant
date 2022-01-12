import { ActionType } from '../types';
import { Command, CommandStatus } from './types';

export enum ChatActionTypes {
  ADD_NEW_COMMANDS = '@chat/ADD_NEW_COMMANDS',
  COMMAND_EXECUTED = '@chat/COMMAND_EXECUTED',
}

export const addNewCommands = (commands: Array<Command>): ActionType<Array<Command>> => ({
  type: ChatActionTypes.ADD_NEW_COMMANDS,
  payload: commands,
});

export const commandExecuted = (executed: boolean, command: Command): ActionType<CommandStatus> => ({
  type: ChatActionTypes.COMMAND_EXECUTED,
  payload: {
    executed,
    command,
  },
});
