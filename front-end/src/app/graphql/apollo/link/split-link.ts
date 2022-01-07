import { split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { httpLink } from './http-link';
// import { webSocketLink } from './websocket-link';

/**
 * Split function of subscriptions over WebSocket or HTTP connection.
 *
 */
export default split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  // webSocketLink,
  httpLink,
);
