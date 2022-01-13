import { RouteType } from '../../../../../routes';

interface OurValuesRoutes extends RouteType {
  subRoute: {
    OUR_VALUES: {
      deepLink: string;
    };
    JOIN_THE_NEO_TEAM: {
      path: string;
      deepLink: string;
    };
  };
}

const OUR_VALUES_ROUTES: OurValuesRoutes = {
  id: '3',
  label: {
    EN: 'Our Values',
    FR: 'Nos valeurs',
  },
  path: '/our-values',
  subRoute: {
    OUR_VALUES: {
      deepLink: '/our-values',
    },
    JOIN_THE_NEO_TEAM: {
      path: '/our-values/join-the-neo-team',
      deepLink: '/our-values/join-the-neo-team',
    },
  },
};

export default OUR_VALUES_ROUTES;
