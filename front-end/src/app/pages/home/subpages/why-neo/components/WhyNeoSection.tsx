import React from 'react';
import styled from 'styled-components';

import { Text } from '../../../../../components';

import CashbackHighlightImage from '../assets/cashback-highlight.png';
import LinkButton from '../../../../../components/LinkButton';

const WHY_NEO_TITLE = 'Why Neo?';
const WHY_NEO_PARAGRAPH = `Why Neo?
We get it, the words “rewards” and “cashback” have been so overused that even we roll our eyes, that’s why we’re
redefining what a card can do for YOU and your community.
`;

type Props = {
  children?: never;
};

const WhyNeoSection: React.FC<Props> = (props) => {
  return (
    <Container>
      <Text variant="h4">{WHY_NEO_TITLE}</Text>
      <Text component="p" variant="body2">
        {WHY_NEO_PARAGRAPH}
      </Text>

      <LinkButton reverseColor label="Join Now" href="https://member.neofinancial.com/signup" />
    </Container>
  );
};

export default WhyNeoSection;

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 30px;
  width: fit-content;

  height: 600px;
  padding: 20vh 0;
  padding-left: 48vw;
  padding-right: 30vw;

  background-image: url(${CashbackHighlightImage});
  background-repeat: no-repeat;
  background-position: 20vw 10vh;
  background-size: 440px;

  & > a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    color: inherit;
  }
`;
