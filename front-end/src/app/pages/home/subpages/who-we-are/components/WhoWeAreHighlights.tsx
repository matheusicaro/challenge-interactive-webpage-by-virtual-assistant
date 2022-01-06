import React from 'react';

import { Text } from '../../../../../components';
import styled from 'styled-components';

import HighlightImage from '../assets/highlight.png';
import { PositionContainer, Title } from '../../styles';

const WHO_WE_ARE_TITLE = 'Who we are';

const WHO_WE_ARE_PARAGRAPH = `We’re reimagining spending, savings, and rewards by using technology to simplify finances,
create rewarding experiences, and build community for all Canadians.
`;

type Props = {
  children?: never;
};

const WhoWeAreHighlights: React.FC<Props> = (props) => {
  return (
    <Container>
      <Title text={WHO_WE_ARE_TITLE} />

      <Text id="who-we-are-paragraph" component="p" variant="body2">
        {WHO_WE_ARE_PARAGRAPH}
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
`;
