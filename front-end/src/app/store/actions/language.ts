import { ActionType } from '../types';

type State = 'EN' | 'FR';

enum Types {
  LOAD_REQUEST = '@language/CHANGE',
}

const loadRequest = (): ActionType => ({
  type: Types.LOAD_REQUEST,
});

const LanguageAction = {
  ActionTypes: Types,
  actions: {
    loadRequest,
  },
};

export default LanguageAction;
export type LanguageState = State;
