import { Avatar } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

import { Text, Transition } from '../../../../../components';

import { PositionContainer, Subtitle, Title } from '../../styles';
import OUR_FOUNDERS_CONSTANTS from '../constants/our-founders.constants';
import { Language } from '../../../../../store/language/types';
import RouterUtils from '../../../../../utils/RouterUtils';
import WHO_WE_ARE_ROUTES from '../constants/route.constants';

type Props = {
  children?: never;
  language: Language;
};

const CSS_ID_OUR_FOUNDERS = RouterUtils.convertDeepLinkToCssId(WHO_WE_ARE_ROUTES.subRoute.OUR_FOUNDERS.deepLink);

const OurFounders: React.FC<Props> = (props) => {
  const founders = OUR_FOUNDERS_CONSTANTS.founders;

  return (
    <Transition>
      <Container id={CSS_ID_OUR_FOUNDERS}>
        <Title text={OUR_FOUNDERS_CONSTANTS.TEXT.TITLE[props.language]} />

        <Text id="our-founders-paragraph" component="p" variant="body2">
          {OUR_FOUNDERS_CONSTANTS.TEXT.PARAGRAPH[props.language]}
        </Text>

        <ul>
          {founders.map((founder) => (
            <li key={founder.name}>
              <Avatar component="figure" className="our-founders-avatar" alt={founder.name} src={founder.picture} />

              <Subtitle text={founder.name} />

              <ul>
                {founder.positions[props.language].map((position) => (
                  <Text key={position} className="our-founders-position" component="li" variant="subtitle2">
                    {position}
                  </Text>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </Transition>
  );
};

export default OurFounders;

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

  @media (max-width: 1024px) {
    .our-founders-avatar {
      width: 180px;
      height: 180px;
    }
  }

  @media (max-width: 800px) {
    & > ul {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(auto, 1fr);
      grid-row-gap: 30px;

      justify-items: center;
    }
  }
`;
