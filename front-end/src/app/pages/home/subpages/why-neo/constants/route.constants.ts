import { RouteType } from '../../../../../routes';

interface WhyNeoRoutes extends RouteType {
  deepLinks: {
    WHY_NEO: string;
    DID_YOU_KNOW: string;
    PLUS_WE_ARE: string;
  };
}

const WHY_NEO_ROUTES: WhyNeoRoutes = {
  id: '2',
  label: {
    EN: 'Why Neo',
    FR: 'Pourquoi Néo',
  },
  deepLinks: {
    WHY_NEO: '/why-neo',
    DID_YOU_KNOW: '/why-neo/did-you-know',
    PLUS_WE_ARE: '/why-neo/plus-we-are',
  },
};

export default WHY_NEO_ROUTES;
