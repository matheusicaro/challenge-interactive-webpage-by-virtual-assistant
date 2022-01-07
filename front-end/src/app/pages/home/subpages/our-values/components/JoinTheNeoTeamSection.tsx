import React from 'react';
import styled from 'styled-components';
import { LinkButton } from '../../../../../components';
import { LanguageState } from '../../../../../store/actions/language';
import { useTheme } from '../../../../../styles/provider';
import { Paragraph, Title } from '../../styles';

import highlightsImage from '../assets/join-the-neo-team-highlights.png';
import JOIN_THE_NEO_TEAM_CONSTANTS from '../constants/join-the-neo-team-section';

type Props = {
  children?: never;
  language: LanguageState;
};

const JoinTheNeoTeamSection: React.FC<Props> = (props) => {
  const { theme } = useTheme();

  return (
    <Container>
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
`;
