import { onError } from '@apollo/client/link/error';

/**
 * Link to handle errors.
 * Log any GraphQL errors or network error that occurred
 *
 * @reference: https://www.apollographql.com/docs/react/api/link/apollo-link-error/
 */
export const errorLink = onError(({ graphQLErrors, networkError }) => {
  // eslint-disable-next-line no-console
  if (networkError) console.log(`[Network error]: ${networkError}`);
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      // eslint-disable-next-line no-console
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
    );
});
