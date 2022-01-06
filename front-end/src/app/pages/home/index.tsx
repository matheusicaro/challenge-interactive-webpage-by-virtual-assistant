import React, { useState } from 'react';

import styled from 'styled-components';

import { Banner, Footer, AppBar } from '../../components';
import Chat from '../../components/chat';
import LanguageButton from '../../components/LanguageButton';
import { SUB_PAGES, SUB_PAGES_LABELS } from './subpages';
import SubpageRouter from './subpages/SubpageRouter';

const HomePage: React.FC = (props) => {
  const [subpage, setSubpage] = useState(SUB_PAGES.WHO_WE_ARE.label);

  return (
    <Container>
      <Banner />
      <AppBar routes={SUB_PAGES_LABELS} onSelectedRoute={setSubpage} routeSelected={subpage} />

      <article>
        <SubpageRouter subpage={subpage} />
      </article>

      <LanguageButton />
      <Chat />

      <Footer />
    </Container>
  );
};

export default HomePage;

const Container = styled.main``;
