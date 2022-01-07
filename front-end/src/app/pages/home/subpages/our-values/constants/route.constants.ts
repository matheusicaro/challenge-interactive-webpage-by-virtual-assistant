import { RouteType } from '../../../../../routes';

interface OurValuesRoutes extends RouteType {
  deepLinks: {
    OUR_VALUES: string;
    JOIN_THE_NEO_TEAM: string;
  };
}

const OUR_VALUES_ROUTES: OurValuesRoutes = {
  id: '3',
  label: {
    EN: 'Our Values',
    FR: 'Nos valeurs',
  },
  deepLinks: {
    OUR_VALUES: '/our-values',
    JOIN_THE_NEO_TEAM: '/our-values/join-the-neo-team',
  },
};

export default OUR_VALUES_ROUTES;
