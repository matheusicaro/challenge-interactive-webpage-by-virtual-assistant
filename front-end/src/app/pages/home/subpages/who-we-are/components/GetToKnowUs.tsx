import React from 'react';

import { List, PositionContainer, Title } from '../../styles';
import styled from 'styled-components';

import ItemList from '../../../../../components/ItemList';
import GET_TO_KNOW_US_CONSTANTS from '../constants/get-to-know-us.constants';
import { LanguageState } from '../../../../../store/actions/language';

type Props = {
  children?: never;
  language: LanguageState;
};

const GetToKnowUs: React.FC<Props> = (props) => {
  const items = GET_TO_KNOW_US_CONSTANTS.items;

  return (
    <Container>
      <Title id="get-to-know-us-title" text={GET_TO_KNOW_US_CONSTANTS.TEXT.TITLE[props.language]} />

      <List>
        {items.map((i) => (
          <ItemList
            key={i.title[props.language]}
            picture={i.picture}
            title={i.title[props.language]}
            paragraph={i.paragraph[props.language]}
            topic={i.topic ? i.topic[props.language] : i.topic}
          />
        ))}
      </List>
    </Container>
  );
};

export default GetToKnowUs;

const Container = styled.section`
  ${PositionContainer}

  background-color: ${({ theme }) => theme.colors.background.secondary};

  #get-to-know-us-title {
    text-align: center;
  }

  .item-list-topic {
    font-size: 0.5em;
  }
`;
