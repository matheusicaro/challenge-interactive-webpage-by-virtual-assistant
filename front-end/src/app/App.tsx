import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import apolloClient from './graphql/apollo';

import Routes from './routes';
import GlobalStore from './store';
import { ThemeGlobalProvider } from './styles/provider';

const App: React.FC = () => (
  <ApolloProvider client={apolloClient}>
    <GlobalStore>
      <ThemeGlobalProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeGlobalProvider>
    </GlobalStore>
  </ApolloProvider>
);

export default App;
