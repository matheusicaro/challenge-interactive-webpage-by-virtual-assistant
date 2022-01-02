import { InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        genres: {
          keyArgs: false,
          /**
           * Merging incoming data with the cache on "genres query"
           *
           * @reference: https://www.apollographql.com/docs/react/caching/cache-field-behavior/#the-merge-function
           */
          merge(existing = [], incoming = []) {
            return [...existing, ...incoming];
          },
        },
      },
    },

    Genres: {
      keyFields: [],

      /**
       * Customizing the behavior of cached fields of the data.
       * The new object will consist of { data, total }.
       *
       * @reference: https://www.apollographql.com/docs/react/caching/cache-field-behavior/
       */
      fields: {
        data(_, { readField }) {
          return readField<Array<string>>('GenreCollection');
        },
        total(_, { readField }) {
          const data = readField<Array<string>>('GenreCollection');
          return data ? data.length : 0;
        },
      },
    },
  },
});

export default cache;
