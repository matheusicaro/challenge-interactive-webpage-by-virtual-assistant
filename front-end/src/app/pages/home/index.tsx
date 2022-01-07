import React, { useContext, useState } from 'react';

import styled from 'styled-components';

import { Banner, Footer, AppBar } from '../../components';
import Chat from '../../components/chat';
import LanguageButton from '../../components/LanguageButton';
import { globalContext } from '../../store';
import { SUB_PAGES, SUB_PAGES_LABELS } from './subpages';
import SubpageRouter from './subpages/SubpageRouter';

const HomePage: React.FC = (props) => {
  const [subpage, setSubpage] = useState(SUB_PAGES.WHO_WE_ARE);
  const { globalState } = useContext(globalContext);

  const labels = SUB_PAGES_LABELS(globalState.language);

  const onSelectedRoute = (label: string) => {
    const subpageSelected = Object.values(SUB_PAGES).find((e) => e.label[globalState.language] === label);
    setSubpage(subpageSelected || SUB_PAGES.WHO_WE_ARE);
  };

  return (
    <Container>
      <Banner />
      <AppBar routes={labels} onSelectedRoute={onSelectedRoute} routeSelected={subpage.label[globalState.language]} />

      <article>
        <SubpageRouter subpageId={subpage.id} />
      </article>

      <LanguageButton />
      <Chat />

      <Footer />
    </Container>
  );
};

export default HomePage;

const Container = styled.main``;
