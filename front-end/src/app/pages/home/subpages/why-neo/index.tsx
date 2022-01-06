import React, { Fragment } from 'react';
import styled from 'styled-components';

import YellowTriangleImage from './assets/yellow-triangle.png';
import DidYouKnowSection from './components/DidYouKnowSection';
import PlusWereSection from './components/PlusWere';
import WhyNeoSection from './components/WhyNeoSection';

type Props = {
  children?: never;
};

const WhyNeo: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <Highlights>
        <WhyNeoSection />
        <DidYouKnowSection />
      </Highlights>

      <PlusWereSection />
    </Fragment>
  );
};

export default WhyNeo;

const Highlights = styled.section`
  background-image: url(${YellowTriangleImage});
  background-repeat: no-repeat;
  background-position: 0vw 0vh;
  background-size: 50vw;
`;
