import { gql } from 'apollo-server-core';

import { chatbotTypeDefs } from './chatbot/typedefs';
import { chatbotResolvers } from './chatbot/resolvers';

const rootTypeDefs = gql`
  type Query {
    health: Health
  }

  type Health {
    status: String!
    time: String!
  }
`;

const rootResolvers = {
  Query: {
    health: () => ({
      status: 'ONLINE',
      time: new Date().toJSON()
    })
  }
};

export const typeDefs = [rootTypeDefs, chatbotTypeDefs];
export const resolvers = [rootResolvers, chatbotResolvers];
