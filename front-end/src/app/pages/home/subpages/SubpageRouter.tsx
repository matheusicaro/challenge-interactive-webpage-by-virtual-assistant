import React from 'react';
import { SUB_PAGES } from '.';
import OurValues from './our-values';
import WhoWeAre from './who-we-are';
import WhyNeo from './why-neo';

type Props = {
  children?: never;
  subpageId: string;
};

const SubpageRouter: React.FC<Props> = ({ subpageId }) => {
  switch (subpageId) {
    case SUB_PAGES.WHO_WE_ARE.id:
      return <WhoWeAre />;
    case SUB_PAGES.WHY_NEO.id:
      return <WhyNeo />;
    case SUB_PAGES.OUR_VALUES.id:
      return <OurValues />;
    default:
      return <WhoWeAre />;
  }
};

export default SubpageRouter;
