import { Avatar } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

import { Text } from '../../../../../components';

import FounderAndrewAvatar from '../assets/founder-andrew.jpg';
import FounderJeffAvatar from '../assets/founder-jeff.jpg';
import FounderKrisAvatar from '../assets/founder-kris.jpg';
import { PositionContainer, Subtitle, Title } from '../../styles';

type Props = {
  children?: never;
};

const OUR_FOUNDERS_TITLE = 'Our founders';
const OUR_FOUNDERS_PARAGRAPH = `We know how technology can be used to improve everyday life. After building SkipTheDishes
into a top 10 brand in Canada, we’re now set on challenging conventions with a smarter spending, saving and rewards
experience for Canadians.`;

const OurFounders: React.FC<Props> = (props) => {
  return (
    <Container>
      <Title text={OUR_FOUNDERS_TITLE} />

      <Text id="our-founders-paragraph" component="p" variant="body2">
        {OUR_FOUNDERS_PARAGRAPH}
      </Text>

      <ul>
        {founders.map((founder) => (
          <li key={founder.name}>
            <Avatar component="figure" className="our-founders-avatar" alt={founder.name} src={founder.picture} />

            <Subtitle text={founder.name} />

            <ul>
              {founder.positions.map((position) => (
                <Text key={position} className="our-founders-position" component="li" variant="subtitle2">
                  {position}
                </Text>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default OurFounders;

const founders = [
  {
    picture: FounderAndrewAvatar,
    name: 'Andrew Chau',
    positions: ['Co-founder &', 'CEO'],
  },
  {
    picture: FounderJeffAvatar,
    name: 'Jeff Adamson',
    positions: ['Co-founder &', 'Head of Partnerships'],
  },
  {
    picture: FounderKrisAvatar,
    name: 'Kris Read',
    positions: ['Co-founder &', 'Head of Engineering'],
  },
];

const Container = styled.section`
  ${PositionContainer}

  background-color: ${({ theme }) => theme.colors.darkColor};

  h4,
  h6,
  p,
  li {
    color: ${({ theme }) => theme.colors.lightColor};
  }

  ul {
    list-style-type: none;
  }

  & > ul {
    list-style-type: none;
    display: flex;
    justify-content: space-around;

    text-align: center;
  }

  h4 {
    text-align: center;
  }

  .our-founders-avatar {
    width: 240px;
    height: 240px;

    margin: 15px 0;
  }

  #our-founders-paragraph {
    padding: 5%;
    text-align: center;
  }

  .our-founders-position {
    font-size: 0.7em;
    font-weight: 400;
    opacity: 0.7;
  }
`;
