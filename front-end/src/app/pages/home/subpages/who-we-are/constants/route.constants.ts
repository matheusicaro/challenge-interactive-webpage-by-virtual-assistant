import { RouteType } from '../../../../../routes';
interface WhoWeAreRoutes extends RouteType {
  subRoute: {
    WHO_WE_ARE: {
      deepLink: string;
    };
    GET_TO_KNOW_US: {
      path: string;
      deepLink: string;
    };
    OUR_FOUNDERS: {
      path: string;
      deepLink: string;
    };
  };
}

const WHO_WE_ARE_ROUTES: WhoWeAreRoutes = {
  id: '1',
  label: {
    EN: 'Who We Are',
    FR: 'Qui nous sommes',
  },
  path: '/who-we-are',
  subRoute: {
    WHO_WE_ARE: {
      deepLink: '/who-we-are',
    },
    GET_TO_KNOW_US: {
      path: '/who-we-are/get-to-know-us',
      deepLink: '/who-we-are/get-to-know-us',
    },
    OUR_FOUNDERS: {
      path: '/who-we-are/our-founders',
      deepLink: '/who-we-are/our-founders',
    },
  },
};

export default WHO_WE_ARE_ROUTES;
