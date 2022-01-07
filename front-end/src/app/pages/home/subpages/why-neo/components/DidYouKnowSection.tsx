import React from 'react';
import styled from 'styled-components';

import { ItemList, Text } from '../../../../../components';

import { useTheme } from '../../../../../styles/provider';
import { LanguageState } from '../../../../../store/actions/language';
import DID_YOU_KNOW_CONSTANTS from '../constants/did-you-know-section.constants';

type Props = {
  children?: never;
  language: LanguageState;
};

const DidYouKnowSection: React.FC<Props> = (props) => {
  const { theme } = useTheme();

  const isDarkTheme = theme === 'dark';
  const items = DID_YOU_KNOW_CONSTANTS.items;

  return (
    <Container>
      <Text variant="h4">{DID_YOU_KNOW_CONSTANTS.TEXT.DID_YOU_KNOW_TITLE[props.language]}</Text>

      <ul>
        {items.map((item) => (
          <ItemList
            key={item.title[props.language]}
            picture={isDarkTheme ? item.picture.dark : item.picture.light}
            title={item.title[props.language]}
            paragraph={item.paragraph[props.language]}
          />
        ))}
      </ul>
    </Container>
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
`;
