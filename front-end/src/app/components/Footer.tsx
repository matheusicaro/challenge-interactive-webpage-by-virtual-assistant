import React from 'react';

import styled from 'styled-components';
import { Language } from '../store/language/types';
import { Text } from './';

const COPYRIGHT = {
  EN: 'All images and information are copyright of Neo Financial and were taken from the official website - www.neofinancial.com',
  FR: 'Toutes les images et informations sont la propriété de Neo Financial et proviennent du site officiel - www.neofinancial.com',
};

type Props = {
  language: Language;
};

/**
 * Footer component
 *
 */
const Footer: React.FC<Props> = (props) => (
  <Container>
    <a href="https://matheusicaro.com" rel="noopener noreferrer" target="_blank" title="Matheus Icaro Web Profile">
      <Text variant="body1" component="span">
        matheusicaro.com
      </Text>
    </a>
    <Text id="copyright">{COPYRIGHT[props.language]}</Text>
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
      color: ${({ theme }) => theme.colors.lightColor};
    }

    :hover {
      text-decoration: underline;
      opacity: 0.8;
    }
  }

  #copyright {
    font-size: 0.8em;
    margin: 25px 0 60px 0;
    color: #e8ff2873;
  }
`;
