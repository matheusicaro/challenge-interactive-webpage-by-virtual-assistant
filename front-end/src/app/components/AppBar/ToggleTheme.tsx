import React from 'react';
import { useTheme } from '../../styles/provider';
import { DarkIcon, LightIcon, ThemeContainer } from './styles';
import { ThemeNamesType } from '../../styles/themes';

const ToggleTheme: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const isLightTheme = theme === 'light';

  const onSelectTheme = (themeSelected: ThemeNamesType) => {
    if (themeSelected !== theme) toggleTheme(themeSelected);
  };

  return (
    <ThemeContainer>
      <LightIcon $activated={isLightTheme} onClick={() => onSelectTheme('light')} />
      <span>{' | '}</span>
      <DarkIcon $activated={!isLightTheme} onClick={() => onSelectTheme('dark')} />
    </ThemeContainer>
  );
};

export default ToggleTheme;
