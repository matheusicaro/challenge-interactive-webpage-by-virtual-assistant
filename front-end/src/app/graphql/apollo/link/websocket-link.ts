import { WebSocketLink } from '@apollo/client/link/ws';
import environments from '../../../environments';

/**
 * Execute subscriptions (or other GraphQL operations) over WebSocket
 *
 * @reference: https://www.apollographql.com/docs/react/api/link/apollo-link-ws/
 */
export const webSocketLink = new WebSocketLink({
  uri: `ws://${environments.HOST_BASE_URL}`,

  options: {
    reconnect: true,
  },
});
