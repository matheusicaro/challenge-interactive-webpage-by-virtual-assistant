import React from 'react';

import styled from 'styled-components';
import { Banner, Footer, AppBar } from '../../components';
import SubpageRouter from './subpages/SubpageRouter';

type Props = {
  handleSelectedHeaderOption: (option: string) => void;
  routes: Array<string>;
  routeSelected: string;
  subpageId: string;
};

export const HEADER_CSS_ID = 'header-appbar';
export const CSS_FIXING_CLASS_NAME = 'is-pinned';

const HomeView: React.FC<Props> = (props) => {
  return (
    <Main>
      <Banner />
      <AppBar
        id={HEADER_CSS_ID}
        routes={props.routes}
        handleSelectedOption={props.handleSelectedHeaderOption}
        routeSelected={props.routeSelected}
      />

      <article>
        <SubpageRouter subpageId={props.subpageId} />
      </article>

      <Footer />
    </Main>
  );
};

export default HomeView;

const Main = styled.main`
  .${CSS_FIXING_CLASS_NAME} {
    z-index: 99999;
    position: fixed;
    top: 0;

    @media (max-width: 800px) {
      z-index: 999;
    }
  }
`;
