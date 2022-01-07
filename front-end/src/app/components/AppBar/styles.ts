import styled, { css } from 'styled-components';

import AppBarMui from '@mui/material/AppBar';
import { Brightness2, WbSunny } from '@material-ui/icons';
import Button from '@mui/material/Button';

export const AppBarContainer = styled(AppBarMui)`
  background-color: ${({ theme }) => theme.colors.background.appBar} !important;
  background-image: none !important;

  .MuiBox-root {
    margin-left: 80px;
  }
`;

export const BoxItem = styled(Button)<{ active: boolean }>`
  margin: 16px;
  padding: 10px 20px !important;
  font-weight: ${({ active }) => (active ? '900' : '400')} !important;

  color: ${({ theme }) => theme.colors.lightColor} !important;
`;

export const Figure = styled.figure`
  a {
    display: contents;
  }

  img {
    width: 130px;
  }

  @media (max-width: 900px) {
    a {
      display: flex;
    }

    img {
      width: 100px;
    }
  }
`;

export const ThemeContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;

  place-items: center;

  svg:hover {
    cursor: pointer !important;
    opacity: 1 !important;
  }

  @media (max-width: 900px) {
    margin-left: auto;

    width: 100px;
  }
`;

const themeIconStyle = css<{ activated: boolean }>`
  opacity: ${({ activated }) => (activated ? '1' : '0.3')} !important;
  width: 0.8em !important;
`;

export const LightIcon = styled(WbSunny)`
  ${themeIconStyle}
`;

export const DarkIcon = styled(Brightness2)`
  ${themeIconStyle}
`;

export const BoxStyleSX = { flexGrow: 1, display: { xs: 'none', md: 'flex' } };
export const ButtonStyleSX = { my: 2, color: 'white', display: 'block' };
