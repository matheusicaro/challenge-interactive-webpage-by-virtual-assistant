import React, { useState } from 'react';

import { Button, Stack, Switch } from '@mui/material';
import styled from 'styled-components';

import { useTheme } from '../../styles/provider';
import { Banner, Footer, Text } from '../../components';
import Chat from '../../components/chat';

const HomePage: React.FC = (props) => {
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
      <ToggleTheme />

      <article>
        <h1> home page</h1>
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
