import React from 'react';
import AppBarMui from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Logo from '../../assets/images/logo_neo_full.png';
import styled from 'styled-components';

type Props = {
  children?: never;
  routes: Array<string>;
  onSelectedRoute: (route: string) => void;
  routeSelected?: string;
};

const AppBar: React.FC<Props> = (props) => {
  const onClick = (e: any) => {
    e.preventDefault();
    props.onSelectedRoute(e.target.value);
  };

  return (
    <AppBarContainer position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Figure>
            <img src={Logo} alt="Logo" />
          </Figure>

          <Box sx={BoxStyleSX}>
            {props.routes.map((route) => (
              <BoxItem key={route} value={route} onClick={onClick} sx={ButtonStyleSX} activated={props.routeSelected === route}>
                {route}
              </BoxItem>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBarContainer>
  );
};
export default AppBar;

const AppBarContainer = styled(AppBarMui)`
  background-color: ${({ theme }) => theme.colors.background.primaryReverse} !important;

  .MuiBox-root {
    margin-left: 80px;
  }
`;

const BoxItem = styled(Button)<{ activated: boolean }>`
  margin: 16px;
  padding: 10px 20px !important;
  font-weight: ${({ activated }) => (activated ? '900' : '400')} !important;
`;

const Figure = styled.figure`
  display: contents;

  img {
    width: 130px;
  }
`;

const BoxStyleSX = { flexGrow: 1, display: { xs: 'none', md: 'flex' } };
const ButtonStyleSX = { my: 2, color: 'white', display: 'block' };
