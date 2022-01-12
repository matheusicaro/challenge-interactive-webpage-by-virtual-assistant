import React from 'react';

import { Text } from '../../../../../components';
import styled from 'styled-components';

import HighlightImage from '../assets/highlight.png';
import { PositionContainer, Title } from '../../styles';
import WHO_WE_ARE_HIGHLIGHTS_CONSTANTS from '../constants/who-we-are-highlights.constants';
import { Language } from '../../../../../store/language/types';
import RouterUtils from '../../../../../utils/RouterUtils';
import WHO_WE_ARE_ROUTES from '../constants/route.constants';

type Props = {
  children?: never;
  language: Language;
};

const CSS_ID_WHO_WE_ARE = RouterUtils.convertDeepLinkToCssId(WHO_WE_ARE_ROUTES.deepLinks.WHO_WE_ARE);

const WhoWeAreHighlights: React.FC<Props> = (props) => {
  return (
    <Container id={CSS_ID_WHO_WE_ARE}>
      <Title text={WHO_WE_ARE_HIGHLIGHTS_CONSTANTS.TEXT.TITLE[props.language]} />

      <Text id="who-we-are-paragraph" component="p" variant="body2">
        {WHO_WE_ARE_HIGHLIGHTS_CONSTANTS.TEXT.PARAGRAPH[props.language]}
      </Text>
    </Container>
  );
};

export default WhoWeAreHighlights;

const Container = styled.section`
  ${PositionContainer}

  text-align: start;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.darkColor};

  background-image: url(${HighlightImage});
  background-repeat: no-repeat;
  background-position: 68% 78%;
  background-size: 500px;

  #who-we-are-paragraph {
    width: 50%;
    margin: 30px 0;
  }

  h4,
  p {
    color: ${({ theme }) => theme.colors.lightColor};
  }

  @media (max-width: 1600px) {
    background-position: 90% 78%;
  }

  @media (max-width: 1200px) {
    padding: 5vh 5vw;
    background-position: 100% 78%;

    p {
      padding-right: 10%;
    }
  }

  @media (max-width: 900px) {
    background-size: 380px;
    background-position: 100% 100%;
  }

  @media (max-width: 600px) {
    padding-top: 45vh;
    height: 70vh;
    background-position: 50% 10%;
    background-size: 500px;

    p {
      width: 100% !important;
      margin: 15px 0 !important;
    }
  }

  @media (max-height: 800px) {
    background-size: 400px;
  }

  @media (max-height: 690px) {
    background-size: 300px;
    height: 90vh;
    align-content: center;
    display: grid;
  }

  @media (max-height: 460px) {
    height: 120vh;
    align-content: end;
  }
`;
