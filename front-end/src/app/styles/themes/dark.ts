import { createTheme, PaletteMode } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { DefaultTheme } from 'styled-components';
import FONT_FAMILY from './font';

const DARK_THEME_NAME: PaletteMode = 'dark';
export type DarkThemeName = 'dark';

const BACKGROUND_PRIMARY = '#232628';
const TEXT_PRIMARY = 'rgb(255, 255, 255, 0.9)';

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
    },
    text: {
      paragraph: TEXT_PRIMARY,
      title: TEXT_PRIMARY,
    },
  },
};

export default {
  styledComponents,
  materialUi,
};
