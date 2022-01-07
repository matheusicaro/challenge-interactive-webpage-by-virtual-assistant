import { RouteType } from '../../../../../routes';

interface WhoWeAreRoutes extends RouteType {
  deepLinks: {
    WHO_WE_ARE: string;
    GET_TO_KNOW_US: string;
    OUR_FOUNDERS: string;
  };
}

const WHO_WE_ARE_ROUTES: WhoWeAreRoutes = {
  id: '1',
  label: {
    EN: 'Who We Are',
    FR: 'Qui nous sommes',
  },
  deepLinks: {
    WHO_WE_ARE: '/who-we-are',
    GET_TO_KNOW_US: '/who-we-are/get-to-know-us',
    OUR_FOUNDERS: '/who-we-are/our-founders',
  },
};

export default WHO_WE_ARE_ROUTES;
