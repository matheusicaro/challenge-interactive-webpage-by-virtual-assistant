import React from 'react';
import { Fab } from '@mui/material';
import styled from 'styled-components';
import { Language as LanguageIcon } from '@material-ui/icons';

type Props = {
  children?: never;
};

const LanguageButton: React.FC<Props> = (props) => {
  return (
    <Container variant="extended" size="large">
      <LanguageIcon />
      <span>EN</span>
      <span>|</span>
      <span>FR</span>
    </Container>
  );
};

export default LanguageButton;

const Container = styled(Fab)`
  z-index: 7770 !important;
  position: fixed !important;
  top: 92.5vh;
  left: 85vw;
  grid-gap: 5px;

  background-color: ${({ theme }) => theme.colors.background.primary} !important;
  color: ${({ theme }) => theme.colors.text.paragraph} !important;

  box-shadow: 0 1px 6px 0px #b5b5b5 !important;

  & > svg {
    margin-right: 10px;
  }
`;
