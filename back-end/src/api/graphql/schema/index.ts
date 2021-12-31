import { gql } from 'apollo-server-core';

import { chatbotTypeDefs } from './chatbot/typedefs';
import { chatbotResolvers } from './chatbot/resolvers';

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

export const typeDefs = [rootTypeDefs, chatbotTypeDefs];
export const resolvers = [rootResolvers, chatbotResolvers];
