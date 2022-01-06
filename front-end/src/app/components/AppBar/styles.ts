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

export const BoxItem = styled(Button)<{ activated: boolean }>`
  margin: 16px;
  padding: 10px 20px !important;
  font-weight: ${({ activated }) => (activated ? '900' : '400')} !important;
`;

export const Figure = styled.figure`
  display: contents;

  img {
    width: 130px;
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
