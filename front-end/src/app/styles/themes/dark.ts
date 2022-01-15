import { createTheme, PaletteMode } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { DefaultTheme } from 'styled-components';
import FONT_FAMILY from './font';

const DARK_THEME_NAME: PaletteMode = 'dark';
export type DarkThemeName = 'dark';

const BACKGROUND_PRIMARY = '#000000';
const TEXT_PRIMARY = 'rgb(255, 255, 255, 0.5)';
const TEXT_PRIMARY_REVERSE = 'rgb(0, 0, 0, 0.9)';
const DARK = '#000000';
const LIGHT = '#fff';

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
    darkColor: DARK,
    lightColor: LIGHT,

    background: {
      primary: BACKGROUND_PRIMARY,
      secondary: '#121212',

      chat: {
        messages: {
          container: '#b1b1b1',
          bot: '#9b9b9b',
        },
      },
      primaryReverse: LIGHT,
      appBar: '#000000',
      banner: {
        primary: '#2f2f2f',
        primaryReverse: '#2f2f2f',
      },
    },

    text: {
      paragraph: TEXT_PRIMARY,
      paragraphReverse: TEXT_PRIMARY_REVERSE,
      title: TEXT_PRIMARY,
      chat: {
        userMessage: '#fff',
        header: TEXT_PRIMARY_REVERSE,
      },
    },
  },
};

export default {
  styledComponents,
  materialUi,
};
