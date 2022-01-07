import React, { ReactElement } from 'react';

import { Fade } from '@mui/material';

type Props = {
  children: ReactElement;
};

const Transition: React.FC<Props> = (props) => {
  return (
    <Fade in={true} timeout={2000}>
      {props.children}
    </Fade>
  );
};

export default Transition;
