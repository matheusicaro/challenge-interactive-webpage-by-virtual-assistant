import React, { Fragment } from 'react';

import GetToKnowUs from './components/GetToKnowUs';
import OurFounders from './components/OurFounders';
import WhoWeAreHighlights from './components/WhoWeAreHighlights';

type Props = {
  children?: never;
};

const WhoWeAre: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <WhoWeAreHighlights />
      <GetToKnowUs />
      <OurFounders />
    </Fragment>
  );
};

export default WhoWeAre;
