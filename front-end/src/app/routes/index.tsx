import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/home';
import OUR_VALUES_ROUTES from '../pages/home/subpages/our-values/constants/route.constants';
import WHO_WE_ARE_ROUTES from '../pages/home/subpages/who-we-are/constants/route.constants';
import WHY_NEO_ROUTES from '../pages/home/subpages/why-neo/constants/route.constants';
import { LanguageState } from '../store/actions/language';

export interface RouteType {
  id: string;
  label: {
    [key in LanguageState]: string;
  };
}

const Routes: React.FC = () => (
  <Switch>
    <Route
      exact
      path="/who-we-are"
      render={() => <Home deepLink={WHO_WE_ARE_ROUTES.deepLinks.WHO_WE_ARE} routeId={WHO_WE_ARE_ROUTES.id} />}
    />
    <Route
      exact
      path="/who-we-are/get-to-know-us"
      render={() => <Home deepLink={WHO_WE_ARE_ROUTES.deepLinks.GET_TO_KNOW_US} routeId={WHO_WE_ARE_ROUTES.id} />}
    />
    <Route
      exact
      path="/who-we-are/our-founders"
      render={() => <Home deepLink={WHO_WE_ARE_ROUTES.deepLinks.OUR_FOUNDERS} routeId={WHO_WE_ARE_ROUTES.id} />}
    />

    <Route exact path="/why-neo/" render={() => <Home deepLink={WHY_NEO_ROUTES.deepLinks.WHY_NEO} routeId={WHY_NEO_ROUTES.id} />} />
    <Route
      exact
      path="/why-neo/did-you-know"
      render={() => <Home deepLink={WHY_NEO_ROUTES.deepLinks.DID_YOU_KNOW} routeId={WHY_NEO_ROUTES.id} />}
    />
    <Route
      exact
      path="/why-neo/plus-we-are"
      render={() => <Home deepLink={WHY_NEO_ROUTES.deepLinks.PLUS_WE_ARE} routeId={WHY_NEO_ROUTES.id} />}
    />

    <Route
      exact
      path="/our-values"
      render={() => <Home deepLink={OUR_VALUES_ROUTES.deepLinks.OUR_VALUES} routeId={OUR_VALUES_ROUTES.id} />}
    />
    <Route
      exact
      path="/our-values/join-the-neo-team"
      render={() => <Home deepLink={OUR_VALUES_ROUTES.deepLinks.JOIN_THE_NEO_TEAM} routeId={OUR_VALUES_ROUTES.id} />}
    />

    <Route path="*" component={Home} />
  </Switch>
);

export default Routes;
