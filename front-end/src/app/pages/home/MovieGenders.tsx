import React, { Fragment } from 'react';

import { Text } from '../../components';
import { useQuery } from '@apollo/client';
import { GQL_GET_GENRES } from '../../graphql/queries/genres';
import styled from 'styled-components';

const MovieGenders: React.FC = (props) => {
  const { loading, error, data } = useQuery(GQL_GET_GENRES);

  return (
    <Fragment>
      {loading && <Text variant="h5">Loading...</Text>}

      {error && <Text variant="h5">{error?.message || 'Error on requesting data'}</Text>}

      {data && data.GenreCollection && (
        <Fragment>
          <Ul>
            {data.GenreCollection.map((g: string) => (
              <Text key={g} component={'li'} variant="subtitle2">
                {g}
              </Text>
            ))}
          </Ul>

          <Text component={'p'} variant="body2">
            Search performed at:{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://anilist.co/graphiql?query=query%20%7B%0A%20%20GenreCollection%0A%7D%0A"
            >
              www.anilist.co/graphiql
            </a>
          </Text>
        </Fragment>
      )}
    </Fragment>
  );
};

export default MovieGenders;

const Ul = styled.ul`
  place-content: center;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 80px;
  padding: 50px;
`;
