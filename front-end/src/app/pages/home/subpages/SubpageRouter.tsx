import React from 'react';
import { SUB_PAGES } from '.';
import OurValues from './our-values';
import WhoWeAre from './who-we-are';
import WhyNeo from './why-neo';

type Props = {
  children?: never;
  subpage: string;
};

const SubpageRouter: React.FC<Props> = ({ subpage }) => {
  switch (subpage) {
    case SUB_PAGES.WHO_WE_ARE.label:
      return <WhoWeAre />;
    case SUB_PAGES.WHY_NEO.label:
      return <WhyNeo />;
    case SUB_PAGES.OUR_VALUES.label:
      return <OurValues />;
    default:
      return <WhoWeAre />;
  }
};

export default SubpageRouter;
