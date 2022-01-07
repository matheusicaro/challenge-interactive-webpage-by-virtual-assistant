import React from 'react';
import styled from 'styled-components';
import { LinkButton } from '../../../../../components';
import { LanguageState } from '../../../../../store/actions/language';
import { useTheme } from '../../../../../styles/provider';
import RouterUtils from '../../../../../utils/RouterUtils';
import { Paragraph, Title } from '../../styles';

import highlightsImage from '../assets/join-the-neo-team-highlights.png';
import JOIN_THE_NEO_TEAM_CONSTANTS from '../constants/join-the-neo-team-section';
import OUR_VALUES_ROUTES from '../constants/route.constants';

type Props = {
  children?: never;
  language: LanguageState;
};

const CSS_ID_JOIN_THE_NEO_TEAM = RouterUtils.convertDeepLinkToCssId(OUR_VALUES_ROUTES.deepLinks.JOIN_THE_NEO_TEAM);

const JoinTheNeoTeamSection: React.FC<Props> = (props) => {
  const { theme } = useTheme();

  return (
    <Container id={CSS_ID_JOIN_THE_NEO_TEAM}>
      <Title text={JOIN_THE_NEO_TEAM_CONSTANTS.TEXT.TITLE[props.language]} />

      <Paragraph text={JOIN_THE_NEO_TEAM_CONSTANTS.TEXT.PARAGRAPH[props.language]} />

      <LinkButton
        reverseColor={theme === 'dark'}
        href="https://careers-neofinancial.icims.com/"
        label={JOIN_THE_NEO_TEAM_CONSTANTS.TEXT.BUTTON[props.language]}
      />
    </Container>
  );
};

export default JoinTheNeoTeamSection;

const Container = styled.section`
  padding: 10vh 25vw;
  padding-right: 50vw;
  height: 498px;

  background-color: ${({ theme }) => theme.colors.darkColor};

  &,
  h4,
  p {
    color: ${({ theme }) => theme.colors.lightColor};
  }

  h4,
  p,
  a {
    margin: 40px 0px;
  }

  h4 {
    margin-top: 0;
  }

  background-image: url(${highlightsImage});
  background-repeat: no-repeat;
  background-position: 50vw 0vh;
  background-size: 578px;

  @media (max-width: 1450px) {
    background-position: 62vw 10vh;
    background-size: 480px;
    padding: 10vh 10vw;
    padding-right: 50vw;
  }

  @media (max-width: 1260px) {
    background-position: 55vw 10vh;
    background-size: 420px;
    padding: 10vh 4vw;
    padding-right: 55vw;
  }

  @media (max-width: 900px) {
    background-position: 45vw 35vh;
    padding-right: 50vw;
    height: 670px;
  }

  @media (max-width: 720px) {
    background-position-x: right;
    background-position-y: bottom;
    background-size: 360px;
    height: 670px;
  }

  @media (max-width: 600px) {
    padding: 10vh 4vw;
  }

  @media (max-width: 400px) {
    height: 90vh;

    @media (max-height: 760px) {
      height: 100vh;
    }

    @media (max-height: 680px) {
      height: 120vh;
    }

    @media (max-height: 540px) {
      height: 140vh;
    }

    @media (max-height: 460px) {
      height: 170vh;
    }
  }

  @media (max-width: 360px) {
    background-size: 280px;
  }
`;
