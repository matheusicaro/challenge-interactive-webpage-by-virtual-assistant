import React from 'react';
import styled from 'styled-components';

import { Text } from '../../../../../components';

import CashbackHighlightImage from '../assets/cashback-highlight.png';
import LinkButton from '../../../../../components/LinkButton';
import WHY_NEO_CONSTANTS from '../constants/why-neo-section.constants';
import { LanguageState } from '../../../../../store/actions/language';
import RouterUtils from '../../../../../utils/RouterUtils';
import WHY_NEO_ROUTES from '../constants/route.constants';

type Props = {
  children?: never;
  language: LanguageState;
};

const CSS_ID_WHY_NEO_TITLE = RouterUtils.convertDeepLinkToCssId(WHY_NEO_ROUTES.deepLinks.WHY_NEO);

const WhyNeoSection: React.FC<Props> = (props) => {
  return (
    <Container id={CSS_ID_WHY_NEO_TITLE}>
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

  h4 {
    padding: 0 10px;
  }

  @media (max-width: 1600px) {
    background-position: 5vw 10vh;
  }

  @media (max-width: 1024px) {
    background-position: 0vw 15vh;
    background-size: 360px;

    padding-right: 10vw;
  }

  @media (max-width: 800px) {
    background-size: 300px;
  }

  @media (max-width: 640px) {
    background-position: 30vw 15vh;
    padding: 20vh 20vw;
    padding-top: 60vh;
    height: 90vh;
    padding-bottom: 0vh;
  }

  @media (max-width: 500px) {
    background-position: 20vw 15vh;
  }

  @media (max-width: 360px) {
    background-position: 2vw 15vh;
    background-size: 260px;
  }

  @media (max-height: 720px) and (max-width: 640px) {
    padding-top: 70vh;
    height: 110vh;
  }
`;
