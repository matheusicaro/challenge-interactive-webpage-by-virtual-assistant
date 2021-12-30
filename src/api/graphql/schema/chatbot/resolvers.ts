import ChabotService from '../../../service/chatbot.service';
import Message from '../../../service/models/message.model';

// Mutation resolvers
const sendMessage = async (_: any, { message }: any): Promise<Message> => {
  const answer = ChabotService.sendMessage(message);

  return answer;
};

export const chatbotResolvers = {
  Mutation: { sendMessage }
};
