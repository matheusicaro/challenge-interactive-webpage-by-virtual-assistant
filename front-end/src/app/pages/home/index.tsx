import React, { useState } from 'react';

import { Button, Stack, Switch } from '@mui/material';
import styled from 'styled-components';

import { useTheme } from '../../styles/provider';
import { Banner, Footer, Text } from '../../components';
import MovieGenders from './MovieGenders';

const HomePage: React.FC = (props) => {
  const [mustFetchMovieGenders, setMustFetchMovieGenders] = useState(false);

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

  const ButtonFetchMovieGenders = () => (
    <Button color="warning" variant="outlined" onClick={() => setMustFetchMovieGenders(true)}>
      Load GraphQL data
    </Button>
  );

  return (
    <Container>
      <Banner />
      <ToggleTheme />

      <article>
        {!mustFetchMovieGenders && <ButtonFetchMovieGenders />}
        {mustFetchMovieGenders && <MovieGenders />}
      </article>

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
