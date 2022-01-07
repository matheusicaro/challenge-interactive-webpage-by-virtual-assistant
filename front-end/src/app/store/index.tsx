import React, { createContext, ReactElement, ReactNode, useReducer } from 'react';
import Reducer from './reducer';
import { ContextType, GlobalStateInterface } from './types';

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

export const INITIAL_STATE: GlobalStateInterface = (() => {
  try {
    const pageLanguage = window.navigator.language;
    const browserLanguage = pageLanguage.slice(0, pageLanguage.indexOf('-')).toUpperCase();
    const language = browserLanguage === 'FR' ? 'FR' : 'EN';

    return { language };
  } catch (error: any) {
    return { language: 'EN' };
  }
})();