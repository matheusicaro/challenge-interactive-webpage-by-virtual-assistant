import { ApolloClient, from } from '@apollo/client';
import cache from './cache';
import { asyncLink } from './link/async-link';
import { errorLink } from './link/error-link';
import { forwardLink } from './link/forward-link';
import { httpLink } from './link/http-link';
import splitLink from './link/split-link';

const apolloClient = new ApolloClient({
  /*
   * using websocket and http through split link
   */
  link: httpLink,
  cache,
});

export default apolloClient;
