import { Dispatch } from 'react';

export interface GlobalStateInterface {
  language: 'EN' | 'FR';
}

export type ActionType = {
  type: string;
  payload?: any;
};

export type ContextType = {
  globalState: GlobalStateInterface;
  dispatch: Dispatch<ActionType>;
};
