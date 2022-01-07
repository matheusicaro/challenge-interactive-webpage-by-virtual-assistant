import React from 'react';

import { List, PositionContainer, Title } from '../../styles';
import styled from 'styled-components';

import ItemList from '../../../../../components/ItemList';
import GET_TO_KNOW_US_CONSTANTS from '../constants/get-to-know-us.constants';
import { LanguageState } from '../../../../../store/actions/language';
import RouterUtils from '../../../../../utils/RouterUtils';
import WHO_WE_ARE_ROUTES from '../constants/route.constants';
import { Transition } from '../../../../../components';

type Props = {
  children?: never;
  language: LanguageState;
};

const CSS_ID_GET_TO_KNOW_US = RouterUtils.convertDeepLinkToCssId(WHO_WE_ARE_ROUTES.deepLinks.GET_TO_KNOW_US);

const GetToKnowUs: React.FC<Props> = (props) => {
  const items = GET_TO_KNOW_US_CONSTANTS.items;

  return (
    <Transition>
      <Container id={CSS_ID_GET_TO_KNOW_US}>
        <Title id="get-to-know-us-title" text={GET_TO_KNOW_US_CONSTANTS.TEXT.TITLE[props.language]} />

        <List>
          {items.map((item, index) => (
            <ItemList
              key={index}
              picture={item.picture}
              title={item.title[props.language]}
              paragraph={item.paragraph[props.language]}
              topic={item.topic ? item.topic[props.language] : item.topic}
            />
          ))}
        </List>
      </Container>
    </Transition>
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
