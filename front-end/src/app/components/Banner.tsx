import React from 'react';

import styled from 'styled-components';

import packageJSON from '../../../package.json';
import LogoBackground from '../assets/images/logo-background.png';
import { Language } from '../store/language/types';

const DESCRIPTION = {
  EN: 'Interactive Webpage by Virtual Assistant',
  FR: 'Page Web interactive par assistant virtuel',
};
const FRONT_END = ['#61DBFB', 'React.js, TypeScript, Material-UI, Styled-Components...'];
const BACK_END = ['#6CC24A', 'Node.js, TypeScript, GraphQL, Apollo, MongoDB...'];

type Props = {
  language: Language;
};

/**
 * Banner component with introduction and general application information
 *
 */
const Banner: React.FC<Props> = (props) => {
  const { repository } = packageJSON;

  const isSafari = navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1;

  return (
    <Container isSafari={isSafari}>
      <p className="banner-contrast">{DESCRIPTION[props.language]}</p>
      <p className="banner-topics">
        - Front-end: <span style={{ color: FRONT_END[0] }}>{FRONT_END[1]}</span>
      </p>
      <p className="banner-topics">
        - Back-end: <span style={{ color: BACK_END[0] }}>{BACK_END[1]}</span>
      </p>
      <p className="banner-topics">
        - Repository at:
        <a href={repository.url} rel="noopener noreferrer" target="_blank" title="Repository at Github">
          {' Github'}
        </a>
      </p>
    </Container>
  );
};

export default Banner;

const Container = styled.section<{ isSafari: boolean }>`
  padding: 40px 5vw;
  padding-top: 60px;
  border: none;

  background-image: url(${LogoBackground});
  background-repeat: no-repeat;
  background-position: 90% 80%;
  background-size: 360px;

  background-color: ${({ theme }) => theme.colors.background.banner.primary};

  &,
  .banner-contrast {
    color: ${({ theme }) => theme.colors.lightColor};
  }

  .banner-topics {
    color: #71c4ffab;

    & > a {
      color: #fda2f2;
    }
  }

  & p {
    border-right: ${({ isSafari }) => (isSafari ? 'none' : '0.15em solid')};
    font-family: 'Courier';
    font-size: 20px;
    white-space: nowrap;
    overflow: hidden;
    width: fit-content;
  }

  & p {
    width: 100%;
    max-width: fit-content;
    opacity: ${({ isSafari }) => (isSafari ? 1 : 0)};

    -webkit-animation: type 2s steps(40, end), blink 0.2s step-end infinite alternate;
    animation: type 2s steps(40, end), blink 0.2s step-end infinite alternate;

    -webkit-animation-delay: 2s;
    animation-delay: 2s;

    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }

  & p:nth-child(2) {
    -webkit-animation-delay: 4s;
    animation-delay: 4s;
  }

  & p:nth-child(3) {
    -webkit-animation-delay: 6s;
    animation-delay: 6s;
  }

  & p:nth-child(4) {
    -webkit-animation-delay: 8s;
    animation-delay: 8s;
  }

  & p:nth-child(5) {
    opacity: 0;

    -webkit-animation: typefinal 2s steps(40, end), blink 0.2s step-end infinite alternate;
    animation: typefinal 2s steps(40, end), blink 0.2s step-end infinite alternate;

    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;

    animation-delay: 10s;
    -webkit-animation-delay: 10s;
  }

  @keyframes type {
    0% {
      width: 0;
    }
    1% {
      opacity: 1;
    }
    99.9% {
      border-right: 0.15em solid;
    }
    100% {
      opacity: 1;
      border: none;
    }
  }

  @-webkit-keyframes type {
    0% {
      width: 0;
    }
    1% {
      opacity: 1;
    }
    99.9% {
      border-right: 0.15em solid;
    }
    100% {
      opacity: 1;
      border: none;
    }
  }

  @keyframes typefinal {
    0% {
      width: 0;
    }
    1% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes typefinal {
    0% {
      width: 0;
    }
    1% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
  @-webkit-keyframes blink {
    50% {
      border-color: tranparent;
    }
  }

  @keyframes type {
    0% {
      width: 0;
    }
    1% {
      opacity: 1;
    }
    99.9% {
      border-right: 0.15em solid;
    }
    100% {
      opacity: 1;
      border: none;
    }
  }

  @-webkit-keyframes type {
    0% {
      width: 0;
    }
    1% {
      opacity: 1;
    }
    99.9% {
      border-right: 0.15em solid;
    }
    100% {
      opacity: 1;
      border: none;
    }
  }

  @keyframes typefinal {
    0% {
      width: 0;
    }
    1% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes typefinal {
    0% {
      width: 0;
    }
    1% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
  @-webkit-keyframes blink {
    50% {
      border-color: tranparent;
    }
  }

  @media (max-width: 1400px) {
    padding-left: 2vw !important;
    background-position: 98% 80%;

    & p {
      font-size: 18px;
    }
  }
  @media (max-width: 1024px) {
    padding-top: 25px;
    padding-bottom: 120px;
    background-size: 250px;
    background-position: 97% 95%;
  }

  @media (max-width: 800px) {
    padding-bottom: 160px;

    & p {
      font-size: 0.75em;

      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }

  @media (max-width: 800px) {
    background-position: 50% 95%;
  }

  @media (max-width: 400px) {
    & p {
      font-family: -webkit-pictograph;
      font-size: 0.6em;
      text-transform: uppercase;
    }
  }

  @media (max-width: 300px) {
    background-size: 180px;
  }
`;
