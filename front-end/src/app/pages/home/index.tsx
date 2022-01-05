import React, { useState } from 'react';

import { Stack, Switch } from '@mui/material';
import styled from 'styled-components';

import { useTheme } from '../../styles/provider';
import { Banner, Footer, Text } from '../../components';
import Chat from '../../components/chat';
import AppBar from '../components/AppBar';
import { SUB_PAGES, SUB_PAGES_LABELS } from './subpages';

const HomePage: React.FC = (props) => {
  const [subpage, setSubpage] = useState(SUB_PAGES.WHO_WE_ARE.label);
  const { theme, toggleTheme } = useTheme();

  const ToggleTheme = () => {
    return (
      <Stack direction="row" spacing={1} alignItems="center" component="section">
        <Text>Light Theme</Text>
        <Switch checked={theme === 'dark'} onChange={toggleTheme} />
        <Text>Dark Theme</Text>
      </Stack>
    );
  };

  return (
    <Container>
      <Banner />
      <AppBar routes={SUB_PAGES_LABELS} onSelectedRoute={setSubpage} />
      <ToggleTheme />

      <article>
        <h1> {subpage}</h1>
      </article>

      <Chat />

      <Footer />
    </Container>
  );
};

export default HomePage;

const Container = styled.main`
  section {
    justify-content: center;
  }

  article {
    text-align: center;
    padding: 5%;
  }
`;
