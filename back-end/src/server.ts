// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import { ApolloServer } from 'apollo-server';
import environment from './config/environment';
import { resolvers, typeDefs } from './api/graphql/schema';

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen(environment.PORT).then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`Server ready at ${url}`);
});