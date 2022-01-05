import React, { Fragment } from 'react';

import { Text } from '../../../../components';
import GetToKnowUs from './GetToKnowUs';
import WhoWeAreHighlights from './WhoWeAreHighlights';

const OUR_FOUNDERS_TITLE = 'Our founders';

type Props = {
  children?: never;
};

const WhoWeAre: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <WhoWeAreHighlights />
      <GetToKnowUs />

      <section>
        <Text variant="h1">{OUR_FOUNDERS_TITLE}</Text>
      </section>
    </Fragment>
  );
};

export default WhoWeAre;
