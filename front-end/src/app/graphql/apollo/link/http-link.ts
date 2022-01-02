import { HttpLink } from '@apollo/client';
import environments from '../../../environments';

/**
 * Get GraphQL results over a network using HTTP fetch.
 *
 * @reference: https://www.apollographql.com/docs/react/api/link/apollo-link-http/
 */
export const httpLink = new HttpLink({
  uri: `https://${environments.hostBaseURL}`,
  // Additional options
  // credentials: 'include',
});
