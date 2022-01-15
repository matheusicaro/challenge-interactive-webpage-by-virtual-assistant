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
      <section>
        <Container className="animate__animated animate__pulse animate__infinite"></Container>

        <Transition in={props.active} timeout={{ enter: ENTER_TIMEOUT + 1500, exit: EXIT_TIMEOUT }}>
          <LoadingText variant="h5">Loading...</LoadingText>
        </Transition>
      </section>
    </Transition>
  );
};

export default LoaderFullPage;

const Container = styled.figure`
  width: 100vw;
  height: 100vh;
  z-index: 999999;
  position: fixed;
  background: white;

  animation-duration: 2s;

  background-image: url(${NeoHeartBigImage});
  background-repeat: no-repeat;
  background-position: 50% 35%;
  background-size: 35%;
`;

const LoadingText = styled(Text)`
  position: fixed;
  z-index: 9999991;
  left: 50%;
  top: 80%;
  transform: translate(-50%, -50%);

  opacity: 0.5;
`;
