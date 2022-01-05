import { createTheme, PaletteMode } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { DefaultTheme } from 'styled-components';
import FONT_FAMILY from './font';

const DARK_THEME_NAME: PaletteMode = 'dark';
export type DarkThemeName = 'dark';

const BACKGROUND_PRIMARY = '#000000';
const TEXT_PRIMARY = 'rgb(255, 255, 255, 0.9)';
const TEXT_PRIMARY_REVERSE = 'rgb(0, 0, 0, 0.9)';

const typography: TypographyOptions = {
  fontFamily: FONT_FAMILY,
  allVariants: {
    color: TEXT_PRIMARY,
  },
};

const materialUi = createTheme({
  typography,
  palette: {
    mode: DARK_THEME_NAME,

    text: {
      primary: TEXT_PRIMARY,
    },

    background: {
      paper: BACKGROUND_PRIMARY,
    },
  },
});

const styledComponents: DefaultTheme = {
  title: DARK_THEME_NAME,
  colors: {
    background: {
      primary: BACKGROUND_PRIMARY,
      chat: {
        messages: {
          container: '#F9F9F9',
          bot: '#f3f3f3',
        },
        launcher: {
          container: 'red',
        },
      },
      primaryReverse: '#000000',
    },
    text: {
      paragraph: TEXT_PRIMARY,
      title: TEXT_PRIMARY,
      chat: {
        userMessage: TEXT_PRIMARY_REVERSE,
        header: TEXT_PRIMARY_REVERSE,
      },
    },
  },
};

export default {
  styledComponents,
  materialUi,
};
