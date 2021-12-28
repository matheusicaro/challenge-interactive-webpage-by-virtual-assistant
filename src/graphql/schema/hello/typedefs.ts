import { gql } from 'apollo-server-core';

export const helloTypeDefs = gql`
  type Query {
    hello: String!
    helloAsync: String!
    saySomething(msg: String): Answer!
  }

  type Mutation {
    createAnswer(myAnswer: AnswerInput!): Answer!
  }

  type Answer {
    received: String!
    answer: String!
  }

  input AnswerInput {
    received: String!
    answer: String!
  }
`;
