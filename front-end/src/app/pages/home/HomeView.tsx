import React from 'react';

import styled from 'styled-components';
import { Banner, Footer, AppBar, LoaderFullPage, Transition } from '../../components';
import Chat from '../../components/chat';
import LanguageButton from '../../components/LanguageButton';
import SubpageRouter from './subpages/SubpageRouter';

type Props = {
  handleSelectedHeaderOption: (option: string) => void;
  routes: Array<string>;
  routeSelected: string;
  subpageId: string;
  initialLoader: boolean;
};

export const HEADER_CSS_ID = 'header-appbar';
export const CSS_FIXING_CLASS_NAME = 'is-pinned';

const HomeView: React.FC<Props> = (props) => {
  if (props.initialLoader) return <LoaderFullPage active={props.initialLoader} />;

  return (
    <Transition>
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

        <LanguageButton />
        <Chat />

        <Footer />
      </Main>
    </Transition>
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
