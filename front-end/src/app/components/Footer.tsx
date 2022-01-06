import React from 'react';

import styled from 'styled-components';
import { Text } from './';

/**
 * Footer component
 *
 */
const Footer: React.FC = () => (
  <Container>
    <a href="https://matheusicaro.com" rel="noopener noreferrer" target="_blank" title="Matheus Icaro Web Profile">
      <Text variant="body1" component="span">
        matheusicaro.com
      </Text>
    </a>
  </Container>
);

export default Footer;

const Container = styled.footer`
  text-align: center;
  padding: 50px;

  background-color: ${({ theme }) => theme.colors.background.banner.primaryReverse};

  & > a {
    text-decoration: auto;
    opacity: 0.4;
    color: black;

    span {
      color: ${({ theme }) => theme.colors.text.paragraphReverse};
    }

    :hover {
      text-decoration: underline;
      opacity: 0.8;
    }
  }
`;
