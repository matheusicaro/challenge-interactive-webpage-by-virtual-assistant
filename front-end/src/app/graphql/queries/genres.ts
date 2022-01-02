import { gql } from '@apollo/client';

export const GQL_GET_GENRES = gql`
  query {
    GenreCollection
  }
`;
