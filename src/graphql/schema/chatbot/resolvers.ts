import { Logger } from '../../../config/logger';

// Mutation resolvers
const sendMessage = async (_: any, { message }: any) => {
  Logger.info('receiving msg');

  return {
    user: message,
    bot: 'I receive your message.',
    context: {
      command: {
        type: 'REDIRECT_TO_PAGE',
        value: 'google.com'
      }
    }
  };
};

export const chatbotResolvers = {
  Mutation: { sendMessage }
};
