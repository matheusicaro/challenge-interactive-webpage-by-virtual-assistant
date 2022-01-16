import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Logo from '../../assets/images/logo-neo-full.png';
import { AppBarContainer, BoxItem, BoxStyleSX, ButtonStyleSX, Figure } from './styles';
import Menu from './Menu';
import styled from 'styled-components';
import ToggleTheme from './ToggleTheme';

type Props = {
  children?: never;
  routes: Array<string>;
  handleSelectedOption: (route: string) => void;
  routeSelected?: string;
  id?: string;
};

const AppBar: React.FC<Props> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onClickHeaderMenu = (e: any): void => {
    e.preventDefault();
    props.handleSelectedOption(e.target.value);
  };

  const onSelectOption = (option: string) => props.handleSelectedOption(option);

  return (
    <AppBarContainer id={props.id} position="static">
      <Container maxWidth="xl">
        <ToolbarContainer disableGutters>
          <Menu id="menu-appbar" options={props.routes} onSelectOption={onSelectOption} />

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
                onClick={onClickHeaderMenu}
                sx={ButtonStyleSX}
                $active={route === props.routeSelected}
                disabled={route === props.routeSelected}
              >
                {route}
              </BoxItem>
            ))}
          </Box>

          <ToggleTheme />
        </ToolbarContainer>
      </Container>
    </AppBarContainer>
  );
};

export default AppBar;

const ToolbarContainer = styled(Toolbar)`
  @media (min-width: 900px) {
    #menu-appbar {
      display: none;
    }
  }
`;
