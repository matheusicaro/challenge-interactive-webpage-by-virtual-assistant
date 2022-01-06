import React from 'react';
import styled from 'styled-components';
import { LinkButton } from '../../../../../components';
import { useTheme } from '../../../../../styles/provider';
import { Paragraph, Title } from '../../styles';

import highlightsImage from '../assets/join-the-neo-team-highlights.png';

const BUTTON_LABEL = 'See Open Positions';

const JOIN_THE_NEO_TEAM_TITLE = 'Join the Neo team';
const JOIN_THE_NEO_TEAM_PARAGRAPH = `We are a community of employees, customers, and merchants who are hungry for change.
We are looking for ambitious, talented and passionate people who want to move fast, drive forward fresh ideas and create
a lasting impact.`;

type Props = {
  children?: never;
};

const JoinTheNeoTeamSection: React.FC<Props> = (props) => {
  const { theme } = useTheme();

  return (
    <Container>
      <Title text={JOIN_THE_NEO_TEAM_TITLE} />

      <Paragraph text={JOIN_THE_NEO_TEAM_PARAGRAPH} />

      <LinkButton reverseColor={theme === 'dark'} href="https://careers-neofinancial.icims.com/" label={BUTTON_LABEL} />
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
