import { ActionType } from '../types';
import { Command, CommandStatus } from './types';

export enum ChatActionTypes {
  ADD_NEW_COMMANDS = '@chat/ADD_NEW_COMMANDS',
  COMMANDS_EXECUTED = '@chat/COMMANDS_EXECUTED',
}

export const addNewCommands = (commands: Array<Command>): ActionType<Array<Command>> => ({
  type: ChatActionTypes.ADD_NEW_COMMANDS,
  payload: commands,
});

export const commandsExecuted = (commands: Array<CommandStatus>): ActionType<Array<CommandStatus>> => ({
  type: ChatActionTypes.COMMANDS_EXECUTED,
  payload: commands,
});
