import { LanguageState } from '../../../store/actions/language';
import OUR_VALUES_ROUTES from './our-values/constants/route.constants';
import WHO_WE_ARE_ROUTES from './who-we-are/constants/route.constants';
import WHY_NEO_ROUTES from './why-neo/constants/route.constants';

export const SUB_PAGES_ROUTES = {
  WHO_WE_ARE: WHO_WE_ARE_ROUTES,
  WHY_NEO: WHY_NEO_ROUTES,
  OUR_VALUES: OUR_VALUES_ROUTES,
};

export const SUB_PAGES_LABELS = (language: LanguageState) => Object.values(SUB_PAGES_ROUTES).map((e) => e.label[language]);
