import { Logger } from './../../../config/logger';
// Query resolvers
const hello = () => {
  Logger.info('in hello function...');
  return 'Hi!';
};

const helloAsync = async () => {
  Logger.info('in helloAsync function...');
  return 'Hi, I am async!';
};

const saySomething = async (_: any, { msg }: any) => {
  Logger.info('in saySomething function...');
  return {
    received: msg,
    answer: 'Received!'
  };
};

// Mutation resolvers
const createAnswer = async (_: any, { myAnswer }: any) => {
  Logger.info('in createAnswer function...');
  return {
    received: `Created: ${myAnswer.received}`,
    answer: `Created: ${myAnswer.answer}`
  };
};

export const helloResolvers = {
  Query: { hello, helloAsync, saySomething },
  Mutation: { createAnswer }
};
