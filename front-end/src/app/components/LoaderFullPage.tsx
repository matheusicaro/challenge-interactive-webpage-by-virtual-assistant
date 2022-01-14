import React from 'react';
import styled from 'styled-components';

import NeoHeartBigImage from '../assets/images/neo-heart-big.png';

type Props = {
  children?: never;
};

const LoaderFullPage: React.FC<Props> = (props) => {
  return <Container />;
};

export default LoaderFullPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 999999;
  /* content: 'test'; */
  background: white;

  background-image: url(${NeoHeartBigImage});
`;
