import ChabotService from '../../../service/chatbot.service';
import Message from '../../../service/models/message.model';

/**
 * Mutation resolvers
 *
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sendMessage = async (_: unknown, { message, conversationId, language }: any): Promise<Message> => {
  const answer = ChabotService.sendMessage(message, conversationId, language);
  return answer;
};

export const chatbotResolvers = {
  Mutation: { sendMessage }
};
