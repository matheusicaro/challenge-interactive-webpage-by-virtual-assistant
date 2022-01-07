import React, { Fragment, useContext } from 'react';
import { globalContext } from '../../../../store';

import GetToKnowUs from './components/GetToKnowUs';
import OurFounders from './components/OurFounders';
import WhoWeAreHighlights from './components/WhoWeAreHighlights';

type Props = {
  children?: never;
};

const WhoWeAre: React.FC<Props> = (props) => {
  const { globalState } = useContext(globalContext);

  return (
    <Fragment>
      <WhoWeAreHighlights language={globalState.language} />
      <GetToKnowUs language={globalState.language} />
      <OurFounders language={globalState.language} />
    </Fragment>
  );
};

export default WhoWeAre;
