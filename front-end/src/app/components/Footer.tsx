import React from 'react';

import styled from 'styled-components';
import { Text } from './';

/**
 * Footer component
 *
 */
const Footer: React.FC = () => (
  <Container>
    <a href="https://matheusicaro.com" rel="noopener noreferrer" target="_blank" title="Project repository">
      <Text variant="body1" component="span">
        matheusicaro.com
      </Text>
    </a>
  </Container>
);

export default Footer;

const Container = styled.footer`
  text-align: center;
  position: absolute;
  bottom: 40px;
  left: 0;
  right: 0;

  & > a {
    text-decoration: auto;
    opacity: 0.4;
    color: black;

    :hover {
      text-decoration: underline;
      opacity: 1;
    }
  }
`;
