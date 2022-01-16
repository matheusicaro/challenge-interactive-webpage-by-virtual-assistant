import React from 'react';

import styled from 'styled-components';
import { Banner, Footer, AppBar, LoaderFullPage, Transition } from '../../components';
import Chat from '../../components/chat';
import LanguageButton from '../../components/LanguageButton';
import { Language } from '../../store/language/types';
import SubpageRouter from './subpages/SubpageRouter';

type Props = {
  handleSelectedHeaderOption: (option: string) => void;
  routes: Array<string>;
  routeSelected: string;
  subpageId: string;
  initialLoader: boolean;
  language: Language;
};

export const HEADER_CSS_ID = 'header-appbar';
export const CSS_FIXING_CLASS_NAME = 'is-pinned';

const HomeView: React.FC<Props> = (props) => {
  if (props.initialLoader) return <LoaderFullPage active={props.initialLoader} />;

  return (
    <Transition>
      <Main>
        <Banner language={props.language} />

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

        <Footer language={props.language} />
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

    @media screen and (max-width: 800px), screen and (max-height: 680px) {
      z-index: 999;
    }
  }
`;
