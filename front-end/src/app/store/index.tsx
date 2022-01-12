import React, { createContext, ReactElement, ReactNode, useReducer } from 'react';
import BrowserUtils from '../utils/BrowserUtils';
import Reducer from './reducer';
import { ContextType, GlobalState } from './types';

type Props = {
  children?: ReactNode;
};

/**
 * React Context-based Global Store with a reducer
 *
 **/
const GlobalStore: React.FC<Props> = ({ children }): ReactElement => {
  const [globalState, dispatch] = useReducer(Reducer, INITIAL_STATE);

  return <globalContext.Provider value={{ globalState, dispatch }}>{children}</globalContext.Provider>;
};

export default GlobalStore;

export const globalContext = createContext({} as ContextType);

export const INITIAL_STATE: GlobalState = {
  language: BrowserUtils.getLanguage() === 'FR' ? 'FR' : 'EN',
  chat: {
    commands: [],
  },
};
