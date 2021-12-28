import { gql } from 'apollo-server-core';

import { helloTypeDefs } from './hello/typedefs';
import { helloResolvers } from './hello/resolvers';

const rootTypeDefs = gql`
  type Query {
    _empty: Boolean
  }

  type Mutation {
    _empty: Boolean
  }

  type Subscription {
    _empty: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _empty: () => true
  },

  Mutation: {
    _empty: () => true
  }
};

export const typeDefs = [rootTypeDefs, helloTypeDefs];
export const resolvers = [rootResolvers, helloResolvers];
