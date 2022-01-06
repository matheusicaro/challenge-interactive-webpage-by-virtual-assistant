import React, { Fragment } from 'react';
import JoinTheNeoTeamSection from './components/JoinTheNeoTeamSection';
import OurValuesSection from './components/OurValuesSection';

type Props = {
  children?: never;
};

const OurValues: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <JoinTheNeoTeamSection />
      <OurValuesSection />
    </Fragment>
  );
};

export default OurValues;
