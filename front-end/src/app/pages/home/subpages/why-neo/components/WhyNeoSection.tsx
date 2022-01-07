import React from 'react';
import styled from 'styled-components';

import { Text } from '../../../../../components';

import CashbackHighlightImage from '../assets/cashback-highlight.png';
import LinkButton from '../../../../../components/LinkButton';
import WHY_NEO_CONSTANTS from '../constants/why-neo-section.constants';
import { LanguageState } from '../../../../../store/actions/language';

type Props = {
  children?: never;
  language: LanguageState;
};

const WhyNeoSection: React.FC<Props> = (props) => {
  return (
    <Container>
      <Text variant="h4">{WHY_NEO_CONSTANTS.TEXT.WHY_NEO_TITLE[props.language]}</Text>
      <Text component="p" variant="body2">
        {WHY_NEO_CONSTANTS.TEXT.WHY_NEO_PARAGRAPH[props.language]}
      </Text>

      <LinkButton reverseColor label={WHY_NEO_CONSTANTS.TEXT.BUTTON[props.language]} href="https://member.neofinancial.com/signup" />
    </Container>
  );
};

export default WhyNeoSection;

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 30px;
  width: fit-content;

  height: 600px;
  padding: 20vh 0;
  padding-left: 48vw;
  padding-right: 30vw;

  background-image: url(${CashbackHighlightImage});
  background-repeat: no-repeat;
  background-position: 20vw 10vh;
  background-size: 440px;

  & > a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    color: inherit;
  }
`;
