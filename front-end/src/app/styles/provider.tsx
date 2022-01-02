import React, { createContext, useContext, useLayoutEffect, useState } from 'react';

import { ThemeProvider as ThemeProviderMaterialUi } from '@mui/material/styles';
import { ThemeProvider as ThemeProviderStyledComponents } from 'styled-components';

import { GlobalStyle } from './cssGlobalStyle';
import { ThemeType, themes } from './themes';

type StateType = {
  mounted?: boolean;
  theme: ThemeType;
};

type ThemeState = {
  mounted?: boolean;
  theme: ThemeType;
  toggleTheme: () => void;
};

type SetStateType = React.Dispatch<React.SetStateAction<StateType>>;

const initialTheme: ThemeType = themes.light;

const ThemeContext = createContext<ThemeState>({
  theme: initialTheme,
  toggleTheme: () => {
    return;
  },
});

/**
 * Global theme provider for App encapsulated by Styled Components and Material-UI.
 */
const ThemeGlobalProvider = ({ children }: any) => {
  const [state, setState] = useState<StateType>({ theme: initialTheme });

  const toggleTheme = () => setState(state.theme.name === 'light' ? newTheme(themes.dark) : newTheme(themes.light));

  useLayoutEffect(() => newStateMounted(setState, state.mounted), [state]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme: state.theme, mounted: state.mounted }}>
      <ThemeProviderStyledComponents theme={state.theme.styledComponent}>
        <GlobalStyle />
        <ThemeProviderMaterialUi theme={state.theme.materialUi}>{children}</ThemeProviderMaterialUi>
      </ThemeProviderStyledComponents>
    </ThemeContext.Provider>
  );
};

const newTheme = (theme: ThemeType) => ({ theme, mounted: false });

const newStateMounted = (setState: SetStateType, mounted?: boolean) => {
  if (!mounted) setState((prev) => ({ ...prev, mounted: true }));
};

const useTheme = () => {
  const { theme, toggleTheme, mounted } = useContext<ThemeState>(ThemeContext);

  return {
    themeMounted: mounted,
    theme: theme.name,
    toggleTheme,
  };
};

export { ThemeGlobalProvider, useTheme };
