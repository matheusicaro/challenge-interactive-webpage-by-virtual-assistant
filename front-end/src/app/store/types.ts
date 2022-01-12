import { LanguageStoreState } from './language/types';
import { Dispatch } from 'react';
import ChatStoreState from './chat/types';

/**
 * Global state of the store
 */
export interface GlobalState {
  language: LanguageStoreState;
  chat: ChatStoreState;
}

/**
 * Context type of the store
 */
export type ContextType = {
  globalState: GlobalState;
  dispatch: Dispatch<ActionType<any>>;
};

/**
 * Action type to be called in dispatches
 */
export type ActionType<K> = {
  type: string;
  payload?: K;
};
