import { gql } from '@apollo/client';

export const GET_HEALTH = gql`
  query GET_HEALTH {
    health {
      status
    }
  }
`;

export interface HealthData {
  health: {
    status: 'ONLINE';
  };
}
