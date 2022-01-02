import { ApolloClient, from } from '@apollo/client';
import cache from './cache';
import { asyncLink } from './link/async-link';
import { errorLink } from './link/error-link';
import { forwardLink } from './link/forward-link';
import splitLink from './link/split-link';

const apolloClient = new ApolloClient({
  /*
   * using websocket and http through split link
   */
  link: from([errorLink, forwardLink, asyncLink, splitLink]),
  cache,
});

export default apolloClient;
