import React, { Fragment } from 'react';
import styled from 'styled-components';

import { Text } from '../../../../../components';
import LinkButton from './LinkButton';

const TITLE = "Plus, we're: ";
const INSTANT_TEXT_PREFIX = 'Instant: ';
const INSTANT_TEXT = `See how much you've made on each purchase in real-time`;
const FREE_TEXT_PREFIX = 'Free: ';
const FREE_TEXT = 'No annual or monthly fees';

type Props = {
  children?: never;
};

const PlusWere: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <PlusWereSection>
        <Text id="plus-were-title" variant="h4">
          {TITLE}
        </Text>

        <Text variant="h6">
          <b>{INSTANT_TEXT_PREFIX}</b>
          {INSTANT_TEXT}
        </Text>

        <Text variant="h6">
          <b>{FREE_TEXT_PREFIX}</b>
          {FREE_TEXT}
        </Text>

        <LinkButton id="plus-were-button" label="Get the Neo Card" href="https://member.neofinancial.com/signup" />
      </PlusWereSection>
    </Fragment>
  );
};

export default PlusWere;

const PlusWereSection = styled.section`
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
`;
