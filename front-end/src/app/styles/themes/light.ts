import { createTheme, PaletteMode } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { DefaultTheme } from 'styled-components';
import FONT_FAMILY from './font';

const LIGHT_THEME_NAME: PaletteMode = 'light';
export type LightThemeName = 'light';

const BACKGROUND_PRIMARY = '#fff';
const TEXT_PRIMARY = 'rgb(10, 10, 10, 1)';
const TEXT_PRIMARY_REVERSE = 'rgb(245, 245, 245, 1)';
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
    mode: LIGHT_THEME_NAME,

    text: {
      primary: TEXT_PRIMARY,
    },

    background: {
      paper: BACKGROUND_PRIMARY,
    },
  },
});

const styledComponents: DefaultTheme = {
  title: LIGHT_THEME_NAME,
  colors: {
    darkColor: DARK,
    lightColor: LIGHT,

    background: {
      primary: BACKGROUND_PRIMARY,
      secondary: BACKGROUND_PRIMARY,

      chat: {
        messages: {
          container: '#F9F9F9',
          bot: '#f3f3f3',
        },
      },
      primaryReverse: DARK,
      appBar: DARK,
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
