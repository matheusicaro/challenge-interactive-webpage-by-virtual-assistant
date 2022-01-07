import { LanguageState } from '../../../store/actions/language';

export const SUB_PAGES = {
  WHO_WE_ARE: {
    id: '1',
    label: {
      EN: 'Who We Are',
      FR: 'Qui nous sommes',
    },
  },
  WHY_NEO: {
    id: '2',
    label: {
      EN: 'Why Neo',
      FR: 'Pourquoi Néo',
    },
  },
  OUR_VALUES: {
    id: '3',
    label: {
      EN: 'Our Values',
      FR: 'Nos valeurs',
    },
  },
  TECHNOLOGIES_USED: {
    id: '4',
    label: {
      EN: 'Technologies Used',
      FR: 'Technologies utilisées',
    },
  },
};

export const SUB_PAGES_LABELS = (language: LanguageState) => Object.values(SUB_PAGES).map((e) => e.label[language]);
