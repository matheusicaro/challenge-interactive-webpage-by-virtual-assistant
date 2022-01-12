import React, { useContext } from 'react';
import { Fab } from '@mui/material';
import styled from 'styled-components';
import { Language as LanguageIcon } from '@material-ui/icons';
import { globalContext } from '../store';
import { Language } from '../store/language/types';
import { changeLanguage } from '../store/language/actions';

type Props = {
  children?: never;
};

const LanguageButton: React.FC<Props> = (props) => {
  const { globalState, dispatch } = useContext(globalContext);

  const isEnglishLanguage = globalState.language === 'EN';

  const onClickChangeLanguage = () => {
    const newLanguage: Language = isEnglishLanguage ? 'FR' : 'EN';
    dispatch(changeLanguage(newLanguage));
  };

  return (
    <Container variant="extended" size="large" onClick={onClickChangeLanguage}>
      <LanguageIcon />
      <Text activated={isEnglishLanguage}>EN</Text>
      <span>|</span>
      <Text activated={!isEnglishLanguage}>FR</Text>
    </Container>
  );
};

export default LanguageButton;

const Container = styled(Fab)`
  z-index: 99991 !important;
  position: fixed !important;
  /* top: 92.5vh;
  left: 85vw; */
  grid-gap: 5px;

  bottom: 0;
  margin: 0 100px 25px 0 !important;
  right: 0;

  background-color: ${({ theme }) => theme.colors.background.primary} !important;
  color: ${({ theme }) => theme.colors.text.paragraph} !important;

  box-shadow: 0 1px 6px 0px #b5b5b5 !important;

  & > svg {
    margin-right: 10px;
  }

  @media (max-width: 800px) {
    z-index: 998 !important;
  }
`;

const Text = styled.span<{ activated: boolean }>`
  font-weight: ${({ activated }) => (activated ? '900' : '400')};
  opacity: ${({ activated }) => (activated ? '1' : '0.4')};
`;
