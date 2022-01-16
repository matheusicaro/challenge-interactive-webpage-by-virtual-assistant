import { ActionType } from '../types';
import { Command, CommandStatus } from './types';

export enum ChatActionTypes {
  ADD_NEW_COMMANDS = '@chat/ADD_NEW_COMMANDS',
  COMMANDS_EXECUTED = '@chat/COMMANDS_EXECUTED',
  ADD_NEW_CHATBOT_MESSAGE_POSITION_ID = '@chat/ADD_NEW_CHATBOT_MESSAGE_POSITION_ID',
}

export const addNewCommands = (commands: Array<Command>): ActionType<Array<Command>> => ({
  type: ChatActionTypes.ADD_NEW_COMMANDS,
  payload: commands,
});

export const commandsExecuted = (commands: Array<CommandStatus>): ActionType<Array<CommandStatus>> => ({
  type: ChatActionTypes.COMMANDS_EXECUTED,
  payload: commands,
});

export const addNewChatbotPositionMessageId = (messagePositionId: number): ActionType<number> => ({
  type: ChatActionTypes.ADD_NEW_CHATBOT_MESSAGE_POSITION_ID,
  payload: messagePositionId,
});
