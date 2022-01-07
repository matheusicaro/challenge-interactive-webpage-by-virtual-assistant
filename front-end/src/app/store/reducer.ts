import { ActionType, GlobalStateInterface } from './types';
import LanguageAction from './actions/language';

const Reducer = (state: GlobalStateInterface, action: ActionType): GlobalStateInterface => {
  switch (action.type) {
    case LanguageAction?.ActionTypes.LOAD_REQUEST:
      return {
        ...state,
        language: state.language === 'EN' ? 'FR' : 'EN',
      };
    default:
      return state;
  }
};

export default Reducer;
