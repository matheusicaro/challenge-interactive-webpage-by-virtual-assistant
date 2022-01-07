import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Logo from '../../assets/images/logo_neo_full.png';
import { useTheme } from '../../styles/provider';
import { AppBarContainer, BoxItem, BoxStyleSX, ButtonStyleSX, DarkIcon, Figure, LightIcon, ThemeContainer } from './styles';

type Props = {
  children?: never;
  routes: Array<string>;
  onSelectedRoute: (route: string) => void;
  routeSelected?: string;
  id?: string;
};

const AppBar: React.FC<Props> = (props) => {
  const { theme, toggleTheme } = useTheme();

  const isLightTheme = theme === 'light';

  const onClick = (e: any) => {
    e.preventDefault();
    props.onSelectedRoute(e.target.value);
  };

  const ToggleTheme = () => {
    return (
      <ThemeContainer>
        <LightIcon activated={isLightTheme} onClick={toggleTheme} />
        <span>{' | '}</span>
        <DarkIcon activated={!isLightTheme} onClick={toggleTheme} />
      </ThemeContainer>
    );
  };

  return (
    <AppBarContainer id={props.id} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Figure>
            <a href="https://www.neofinancial.com/" rel="noopener noreferrer" target="_blank" title="Neo Financial Official Webpage">
              <img src={Logo} alt="Logo" />
            </a>
          </Figure>

          <Box component="section" sx={BoxStyleSX}>
            {props.routes.map((route) => (
              <BoxItem
                key={route}
                value={route}
                onClick={onClick}
                sx={ButtonStyleSX}
                active={route === props.routeSelected}
                disabled={route === props.routeSelected}
              >
                {route}
              </BoxItem>
            ))}
          </Box>

          <ToggleTheme />
        </Toolbar>
      </Container>
    </AppBarContainer>
  );
};

export default AppBar;
