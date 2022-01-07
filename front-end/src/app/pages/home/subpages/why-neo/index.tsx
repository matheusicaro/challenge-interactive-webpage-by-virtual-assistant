import React, { Fragment, useContext } from 'react';
import styled from 'styled-components';
import { globalContext } from '../../../../store';

import YellowTriangleImage from './assets/yellow-triangle.png';
import DidYouKnowSection from './components/DidYouKnowSection';
import PlusWereSection from './components/PlusWereSection';
import WhyNeoSection from './components/WhyNeoSection';

type Props = {
  children?: never;
};

const WhyNeo: React.FC<Props> = (props) => {
  const { globalState } = useContext(globalContext);

  return (
    <Fragment>
      <Highlights>
        <WhyNeoSection language={globalState.language} />
        <DidYouKnowSection language={globalState.language} />
      </Highlights>
      <PlusWereSection language={globalState.language} />
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
