import React from 'react';

import styled from 'styled-components';

import packageJSON from '../../../package.json';
import LogoBackground from '../assets/images/logo_background.png';

/**
 * Banner component with introduction and general application information
 *
 */
const Banner: React.FC = () => {
  const { description, tags, repository } = packageJSON;
  return (
    <Container>
      <p className="banner-contrast">{description}</p>
      <p className="banner-topics">{`- Developed with ${tags.join(', ')}`}</p>
      <p className="banner-topics">
        - Repository at:
        <a href={repository.url} rel="noopener noreferrer" target="_blank" title="Project repository">
          {' Github'}
        </a>
      </p>
    </Container>
  );
};

export default Banner;

const Container = styled.section`
  padding: 40px 5vw;
  padding-top: 60px;
  margin-bottom: 40px;
  border: none;

  background-image: url(${LogoBackground});
  background-repeat: no-repeat;
  background-position: 90% 80%;
  background-size: 360px;

  background-color: ${({ theme }) => (theme.title === 'light' ? '#2f2f2f' : '#f1f1f1')};

  &,
  .banner-contrast {
    color: ${({ theme }) => theme.colors.background.primary};
  }

  .banner-topics {
    color: ${({ theme }) => (theme.title === 'light' ? '#a3d0f1' : '#098beb')};

    & > a {
      color: ${({ theme }) => (theme.title === 'light' ? 'aquamarine' : '#e90dce')};
    }
  }

  & p {
    border-right: 0.15em solid;
    font-family: 'Courier';
    font-size: 20px;
    white-space: nowrap;
    overflow: hidden;
    width: fit-content;
  }

  & p {
    width: 100%;
    max-width: fit-content;
    opacity: 0;

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
    opacity: 0;

    -webkit-animation: typefinal 2s steps(40, end), blink 0.2s step-end infinite alternate;
    animation: typefinal 2s steps(40, end), blink 0.2s step-end infinite alternate;

    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;

    animation-delay: 6s;
    -webkit-animation-delay: 6s;
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

  @media (max-width: 1600px) {
    background-position: 98% 80% !important;
    background-size: 300px !important;
  }
  @media (max-width: 1400px) {
    background-position: 98% 100% !important;
    background-size: 200px !important;

    padding-left: 3vw !important;
    padding-right: 3vw !important;
    & p {
      font-size: 18px;
    }
  }
  @media (max-width: 1024px) {
    background-size: revert !important;
    background-position: 95% 100% !important;
  }

  @media (max-width: 768px) {
    background-size: 280px !important;
  }

  @media (max-width: 600px) {
    background-image: none !important;
  }
`;
