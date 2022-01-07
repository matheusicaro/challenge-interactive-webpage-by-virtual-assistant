import React, { Fragment, useContext } from 'react';
import { globalContext } from '../../../../store';
import JoinTheNeoTeamSection from './components/JoinTheNeoTeamSection';
import OurValuesSection from './components/OurValuesSection';

type Props = {
  children?: never;
};

const OurValues: React.FC<Props> = (props) => {
  const { globalState } = useContext(globalContext);

  return (
    <Fragment>
      <JoinTheNeoTeamSection language={globalState.language} />
      <OurValuesSection language={globalState.language} />
    </Fragment>
  );
};

export default OurValues;
