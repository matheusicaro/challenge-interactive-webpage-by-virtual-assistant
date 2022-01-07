import React from 'react';
import styled from 'styled-components';

import { Text, Transition } from '../../../../../components';
import LinkButton from '../../../../../components/LinkButton';
import { LanguageState } from '../../../../../store/actions/language';
import { useTheme } from '../../../../../styles/provider';
import RouterUtils from '../../../../../utils/RouterUtils';
import PLUS_WERE_CONSTANTS from '../constants/plus-were.constants';
import WHY_NEO_ROUTES from '../constants/route.constants';

type Props = {
  children?: never;
  language: LanguageState;
};

const CSS_ID_PLUS_WE_ARE = RouterUtils.convertDeepLinkToCssId(WHY_NEO_ROUTES.deepLinks.PLUS_WE_ARE);

const PlusWereSection: React.FC<Props> = (props) => {
  const { theme } = useTheme();

  return (
    <Transition>
      <Container id={CSS_ID_PLUS_WE_ARE}>
        <Text id="plus-were-title" variant="h4">
          {PLUS_WERE_CONSTANTS.TEXT.TITLE[props.language]}
        </Text>

        <Text variant="h6">
          <b>{PLUS_WERE_CONSTANTS.TEXT.INSTANT_TEXT_PREFIX[props.language]}</b>
          {PLUS_WERE_CONSTANTS.TEXT.INSTANT_TEXT[props.language]}
        </Text>

        <Text variant="h6">
          <b>{PLUS_WERE_CONSTANTS.TEXT.FREE_TEXT_PREFIX[props.language]}</b>
          {PLUS_WERE_CONSTANTS.TEXT.FREE_TEXT[props.language]}
        </Text>

        <LinkButton
          reverseColor={theme === 'light'}
          id="plus-were-button"
          label={PLUS_WERE_CONSTANTS.TEXT.BUTTON[props.language]}
          href="https://member.neofinancial.com/signup"
        />
      </Container>
    </Transition>
  );
};

export default PlusWereSection;

const Container = styled.section`
  h4,
  h6 {
    color: ${({ theme }) => theme.colors.darkColor};
  }

  background: rgb(149, 190, 194);
  text-align: center;
  padding: 5vh 0vw;

  display: grid;
  justify-items: center;
  grid-row-gap: 10px;

  #plus-were-title {
    margin: 15px 0;
  }

  #plus-were-button {
    margin: 30px 0;
  }

  @media (max-width: 900px) {
    padding: 5vh 5vw;
  }
`;
