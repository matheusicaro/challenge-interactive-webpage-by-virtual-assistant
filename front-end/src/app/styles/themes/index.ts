import { Theme } from '@mui/material/styles';
import { DefaultTheme } from 'styled-components';

import dark, { DarkThemeName } from './dark';
import light, { LightThemeName } from './light';

export type ThemeNamesType = LightThemeName | DarkThemeName;

export type ThemeType = {
  name: ThemeNamesType;
  materialUi: Theme;
  styledComponent: DefaultTheme;
};

export type ThemesType = {
  dark: ThemeType;
  light: ThemeType;
};

export const themes: ThemesType = {
  dark: {
    name: 'dark',
    materialUi: dark.materialUi,
    styledComponent: dark.styledComponents,
  },
  light: {
    name: 'light',
    materialUi: light.materialUi,
    styledComponent: light.styledComponents,
  },
};
