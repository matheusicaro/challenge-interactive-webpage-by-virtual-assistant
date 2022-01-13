import React from 'react';
import styled from 'styled-components';

import { ItemList, Text, Transition } from '../../../../../components';

import { useTheme } from '../../../../../styles/provider';
import { Language } from '../../../../../store/language/types';
import DID_YOU_KNOW_CONSTANTS from '../constants/did-you-know-section.constants';
import RouterUtils from '../../../../../utils/RouterUtils';
import WHY_NEO_ROUTES from '../constants/route.constants';

type Props = {
  children?: never;
  language: Language;
};

const CSS_ID_DID_YOU_KNOW = RouterUtils.convertDeepLinkToCssId(WHY_NEO_ROUTES.subRoute.DID_YOU_KNOW.deepLink);

const DidYouKnowSection: React.FC<Props> = (props) => {
  const { theme } = useTheme();

  const isDarkTheme = theme === 'dark';
  const items = DID_YOU_KNOW_CONSTANTS.items;

  return (
    <Transition>
      <Container id={CSS_ID_DID_YOU_KNOW}>
        <Text variant="h4">{DID_YOU_KNOW_CONSTANTS.TEXT.DID_YOU_KNOW_TITLE[props.language]}</Text>

        <ul>
          {items.map((item, index) => (
            <ItemList
              key={index}
              picture={isDarkTheme ? item.picture.dark : item.picture.light}
              title={item.title[props.language]}
              paragraph={item.paragraph[props.language]}
            />
          ))}
        </ul>
      </Container>
    </Transition>
  );
};

export default DidYouKnowSection;

const Container = styled.section`
  text-align: center;

  padding: 15vh 20vw;
  padding-bottom: 0;

  & > ul {
    display: flex;
    align-content: space-around;
    margin: 8vh 0;

    list-style-type: none;

    li {
      padding: 18px 25px;

      &,
      p {
        line-height: 1.8em;
      }
    }
  }

  @media (max-width: 1300px) {
    padding: 15vh 5vw;
  }

  @media (max-width: 800px) {
    padding: 5vh 2vw;
  }

  @media (max-width: 600px) {
    padding-top: 15vh;

    & > ul {
      flex-direction: column;
      padding: 0 15vw;
    }
  }

  @media (max-width: 290px) {
    padding-top: 35vh;
  }
`;
