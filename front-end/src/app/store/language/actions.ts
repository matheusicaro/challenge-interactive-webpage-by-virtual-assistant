import { ActionType } from '../types';
import { Language } from './types';

export enum LanguageActionTypes {
  CHANGE_LANGUAGE = '@language/CHANGE',
}

export const changeLanguage = (language: Language): ActionType<Language> => ({
  type: LanguageActionTypes.CHANGE_LANGUAGE,
  payload: language,
});
