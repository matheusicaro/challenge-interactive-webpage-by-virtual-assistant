import React from 'react';

import styled, { css } from 'styled-components';

import { Text } from '../../../components';

export const PositionContainer = css`
  padding: 5vh 25vw;
`;

export const Figure = styled.figure`
  display: contents;

  img {
    width: 50px;
  }
`;

const SubtitleStyled = styled(Text)`
  margin: 10px 0 !important;
  font-size: 0.8em !important;
`;

export const Title = (props: { text: string; id?: string }) => (
  <Text id={props.id} variant="h4">
    {props.text}
  </Text>
);

export const Subtitle = (props: { text: string; id?: string }) => <SubtitleStyled variant="h6">{props.text}</SubtitleStyled>;

export const Paragraph = (props: { text: string; id?: string }) => (
  <Text component="p" variant="body2">
    {props.text}
  </Text>
);

export const List = styled.ul`
  padding: 8% 10%;
  padding-bottom: 0;

  list-style-type: none;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 50px;

  h6,
  p {
    line-height: 2em;
  }

  p {
    font-size: 0.7em;
  }
`;
