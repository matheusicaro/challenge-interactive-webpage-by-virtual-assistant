import React from 'react';
import { List, PositionContainer, Title } from '../../styles';
import styled from 'styled-components';
import { ItemList } from '../../../../../components';
import OUR_VALUES_CONSTANTS from '../constants/our-values-section';
import { Language } from '../../../../../store/language/types';
import OUR_VALUES_ROUTES from '../constants/route.constants';
import RouterUtils from '../../../../../utils/RouterUtils';
import Transition from '../../../../../components/Transition';

type Props = {
  children?: never;
  language: Language;
};

const CSS_ID_OUR_VALUES = RouterUtils.convertDeepLinkToCssId(OUR_VALUES_ROUTES.subRoute.OUR_VALUES.deepLink);

const OurValuesSection: React.FC<Props> = (props) => {
  const items = OUR_VALUES_CONSTANTS.items;

  return (
    <Transition>
      <Container id={CSS_ID_OUR_VALUES}>
        <Title id="our-values-title" text={OUR_VALUES_CONSTANTS.TEXT.TITLE[props.language]} />

        <List>
          {items.map((item, i) => (
            <ItemList key={i} picture={item.picture} title={item.title[props.language]} paragraph={item.paragraph[props.language]} />
          ))}
        </List>
      </Container>
    </Transition>
  );
};

export default OurValuesSection;

const Container = styled.section`
  ${PositionContainer}

  padding: 0vw 25vw;
  padding-bottom: 5vh;

  #our-values-title {
    padding: 50px 0;
    padding-bottom: 0;

    text-align: center;
  }
`;
