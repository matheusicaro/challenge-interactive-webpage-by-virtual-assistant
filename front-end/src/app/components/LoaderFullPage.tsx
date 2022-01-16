import React from 'react';
import styled from 'styled-components';
import { Text } from './';
import { Fade as Transition } from '@mui/material';

import 'animate.css';

import NeoHeartBigImage from '../assets/images/neo-heart-big.png';

type Props = {
  children?: never;
  active: boolean;
};

const LoaderFullPage: React.FC<Props> = (props) => {
  const ENTER_TIMEOUT = 3000;
  const EXIT_TIMEOUT = 6000;

  return (
    <Transition in={props.active} timeout={{ enter: ENTER_TIMEOUT, exit: EXIT_TIMEOUT }}>
      <Container>
        <NeoHeartImage className="animate__animated animate__pulse animate__infinite">
          <img src={NeoHeartBigImage} alt="Logo" />
        </NeoHeartImage>
        <Transition in={props.active} timeout={{ enter: ENTER_TIMEOUT + 5000, exit: EXIT_TIMEOUT }}>
          <Text variant="h5">Loading...</Text>
        </Transition>
      </Container>
    </Transition>
  );
};

export default LoaderFullPage;

const NeoHeartImage = styled.figure`
  img {
    width: 500px;
  }
`;

const Container = styled.section`
  width: 100vw;
  height: 100vh;

  width: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h5 {
    color: rgb(10 10 10 / 25%);
    margin-top: 40px;
    font-size: 2em;
  }

  @media (max-width: 900px) {
    img {
      width: 400px;
    }
    h5 {
      font-size: 1.5em;
    }
  }

  @media (max-width: 600px) {
    img {
      width: 300px;
    }
  }

  @media (max-width: 600px) {
    img {
      width: 180px;
    }
  }
`;
