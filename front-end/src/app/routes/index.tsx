import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/home';
import OUR_VALUES_ROUTES from '../pages/home/subpages/our-values/constants/route.constants';
import WHO_WE_ARE_ROUTES from '../pages/home/subpages/who-we-are/constants/route.constants';
import WHY_NEO_ROUTES from '../pages/home/subpages/why-neo/constants/route.constants';
import { Language } from '../store/language/types';

export interface RouteType {
  id: string;
  label: {
    [key in Language]: string;
  };
  path: string;
  subRoute?: {
    [subRouteName: string]: {
      path?: string;
      deepLink?: string;
    };
  };
}

const Routes: React.FC = () => (
  <Switch>
    <Route
      exact
      path={WHO_WE_ARE_ROUTES.path}
      render={() => <Home deepLink={WHO_WE_ARE_ROUTES.subRoute.WHO_WE_ARE.deepLink} routeId={WHO_WE_ARE_ROUTES.id} />}
    />
    <Route
      exact
      path={WHO_WE_ARE_ROUTES.subRoute.GET_TO_KNOW_US.path}
      render={() => <Home deepLink={WHO_WE_ARE_ROUTES.subRoute.GET_TO_KNOW_US.deepLink} routeId={WHO_WE_ARE_ROUTES.id} />}
    />
    <Route
      exact
      path={WHO_WE_ARE_ROUTES.subRoute.OUR_FOUNDERS.path}
      render={() => <Home deepLink={WHO_WE_ARE_ROUTES.subRoute.OUR_FOUNDERS.deepLink} routeId={WHO_WE_ARE_ROUTES.id} />}
    />

    <Route
      exact
      path={WHY_NEO_ROUTES.path}
      render={() => <Home deepLink={WHY_NEO_ROUTES.subRoute.WHY_NEO.deepLink} routeId={WHY_NEO_ROUTES.id} />}
    />
    <Route
      exact
      path={WHY_NEO_ROUTES.subRoute.DID_YOU_KNOW.path}
      render={() => <Home deepLink={WHY_NEO_ROUTES.subRoute.DID_YOU_KNOW.deepLink} routeId={WHY_NEO_ROUTES.id} />}
    />
    <Route
      exact
      path={WHY_NEO_ROUTES.subRoute.PLUS_WE_ARE.path}
      render={() => <Home deepLink={WHY_NEO_ROUTES.subRoute.PLUS_WE_ARE.deepLink} routeId={WHY_NEO_ROUTES.id} />}
    />

    <Route
      exact
      path={OUR_VALUES_ROUTES.path}
      render={() => <Home deepLink={OUR_VALUES_ROUTES.subRoute.OUR_VALUES.deepLink} routeId={OUR_VALUES_ROUTES.id} />}
    />
    <Route
      exact
      path={OUR_VALUES_ROUTES.subRoute.JOIN_THE_NEO_TEAM.path}
      render={() => <Home deepLink={OUR_VALUES_ROUTES.subRoute.JOIN_THE_NEO_TEAM.deepLink} routeId={OUR_VALUES_ROUTES.id} />}
    />

    <Route path="*" component={Home} />
  </Switch>
);

export default Routes;
