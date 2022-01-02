import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import apolloClient from './graphql/apollo';

import Routes from './routes';
import { ThemeGlobalProvider } from './styles/provider';

const App: React.FC = () => (
  <ApolloProvider client={apolloClient}>
    <ThemeGlobalProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeGlobalProvider>
  </ApolloProvider>
);

export default App;
