import { RouteType } from '../../../../../routes';

interface WhyNeoRoutes extends RouteType {
  subRoute: {
    WHY_NEO: {
      deepLink: string;
    };
    DID_YOU_KNOW: {
      path: string;
      deepLink: string;
    };
    PLUS_WE_ARE: {
      path: string;
      deepLink: string;
    };
  };
}

const WHY_NEO_ROUTES: WhyNeoRoutes = {
  id: '2',
  label: {
    EN: 'Why Neo',
    FR: 'Pourquoi Néo',
  },
  path: '/why-neo',
  subRoute: {
    WHY_NEO: {
      deepLink: '/why-neo',
    },
    DID_YOU_KNOW: {
      path: '/why-neo/did-you-know',
      deepLink: '/why-neo/did-you-know',
    },
    PLUS_WE_ARE: {
      path: '/why-neo/plus-we-are',
      deepLink: '/why-neo/plus-we-are',
    },
  },
};

export default WHY_NEO_ROUTES;
