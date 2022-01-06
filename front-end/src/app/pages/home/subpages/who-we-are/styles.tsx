import React from 'react';

import styled, { css } from 'styled-components';

import { Text } from '../../../../components';

export const PositionContainer = css`
  padding: 5vh 25vw;
`;

export const Figure = styled.figure`
  display: contents;

  img {
    width: 50px;
  }
`;

export const Title = (props: { text: string; id?: string }) => (
  <Text id={props.id} variant="h4">
    {props.text}
  </Text>
);

const SubtitleStyled = styled(Text)`
  margin: 10px 0 !important;
  font-size: 0.8em !important;
`;

export const Subtitle = (props: { text: string; id?: string }) => <SubtitleStyled variant="h6">{props.text}</SubtitleStyled>;
