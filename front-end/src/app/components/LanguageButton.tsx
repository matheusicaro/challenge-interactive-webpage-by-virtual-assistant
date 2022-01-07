import React, { useContext } from 'react';
import { Fab } from '@mui/material';
import styled from 'styled-components';
import { Language as LanguageIcon } from '@material-ui/icons';
import { globalContext } from '../store';
import LanguageAction from '../store/actions/language';

type Props = {
  children?: never;
};

const LanguageButton: React.FC<Props> = (props) => {
  const { globalState, dispatch } = useContext(globalContext);

  const isENLanguage = globalState.language === 'EN';

  return (
    <Container variant="extended" size="large" onClick={() => dispatch(LanguageAction.actions.loadRequest())}>
      <LanguageIcon />
      <Text activated={isENLanguage}>EN</Text>
      <span>|</span>
      <Text activated={!isENLanguage}>FR</Text>
    </Container>
  );
};

export default LanguageButton;

const Container = styled(Fab)`
  z-index: 99991 !important;
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

const Text = styled.span<{ activated: boolean }>`
  font-weight: ${({ activated }) => (activated ? '900' : '400')};
  opacity: ${({ activated }) => (activated ? '1' : '0.4')};
`;
