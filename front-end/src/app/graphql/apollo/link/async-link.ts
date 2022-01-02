import { setContext } from '@apollo/client/link/context';

/**
 * This link makes it easy to perform the asynchronous lookup
 *
 * @reference: https://www.apollographql.com/docs/react/api/link/apollo-link-context/
 */
export const asyncLink = setContext((_request) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const callback = (prevContext: any) => {
    return {
      ...prevContext,
      headers: {
        ...prevContext.headers,
      },
    };
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback);
    }, 0);
  });
});
