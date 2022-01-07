import React from 'react';
import { List, Title } from '../../styles';
import styled from 'styled-components';
import { ItemList } from '../../../../../components';
import OUR_VALUES_CONSTANTS from '../constants/our-values-section';
import { LanguageState } from '../../../../../store/actions/language';

type Props = {
  children?: never;
  language: LanguageState;
};

const OurValuesSection: React.FC<Props> = (props) => {
  const items = OUR_VALUES_CONSTANTS.items;

  return (
    <Container>
      <Title id="our-values-title" text={OUR_VALUES_CONSTANTS.TEXT.TITLE[props.language]} />

      <List>
        {items.map((item) => (
          <ItemList
            key={item.title[props.language]}
            picture={item.picture}
            title={item.title[props.language]}
            paragraph={item.paragraph[props.language]}
          />
        ))}
      </List>
    </Container>
  );
};

export default OurValuesSection;

const Container = styled.section`
  padding: 0vw 25vw;
  padding-bottom: 5vh;

  background-color: ${({ theme }) => theme.colors.background.secondary};

  #our-values-title {
    padding: 50px 0;
    padding-bottom: 0;

    text-align: center;
  }
`;
