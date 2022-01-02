import { ApolloLink } from '@apollo/client';

/**
 * Link to intercept requests and or answers, such as add a new "header" from any value of the context in
 * the requesting for example.
 *
 * @reference: https://www.apollographql.com/docs/react/api/link/introduction/#the-forward-function
 */
export const forwardLink = new ApolloLink((operation, forward) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  operation.setContext((prevContext: any) => {
    return {
      ...prevContext,
      headers: {
        ...prevContext.headers,
        // ___NEW_HEADER_key___: '___NEW_HEADER_value___',
      },
    };
  });

  return forward(operation).map((data) => data);
});
