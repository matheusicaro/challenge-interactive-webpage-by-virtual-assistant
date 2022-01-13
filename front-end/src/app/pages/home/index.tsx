import { useQuery } from '@apollo/client';
import React, { useContext, useEffect, useState } from 'react';
import { GET_HEALTH, HealthData } from '../../graphql/queries/start-server';

import { RouteType } from '../../routes';

import { globalContext } from '../../store';
import BrowserUtils from '../../utils/BrowserUtils';
import RouterUtils from '../../utils/RouterUtils';
import HomeView, { CSS_FIXING_CLASS_NAME, HEADER_CSS_ID } from './HomeView';
import { SUB_PAGES_ROUTES, SUB_PAGES_LABELS } from './subpages';

type State = {
  subpage: RouteType;
  severStarted: boolean;
  attemptsToStartServer: number;
};

type Props = {
  deepLink?: string;
  routeId: string;
};

const HomePage: React.FC<Props> = (props) => {
  const [state, setState] = useState<State>(initialState(props.routeId));
  const { globalState } = useContext(globalContext);
  const { loading, data, refetch } = useQuery<HealthData>(GET_HEALTH, { errorPolicy: 'ignore', fetchPolicy: 'no-cache' });

  const labels = SUB_PAGES_LABELS(globalState.language);

  const onSelectedRoute = (label: string) => {
    const subpageSelected = Object.values(SUB_PAGES_ROUTES).find((e) => e.label[globalState.language] === label);
    setState((prev) => ({ ...prev, subpage: subpageSelected || SUB_PAGES_ROUTES.WHO_WE_ARE }));
  };

  const goToSubpage = () => {
    setTimeout(() => setState((prev) => ({ ...prev, subpage: getSubPageById(props.routeId) })), 2000);
  };

  const goToDeepLink = () => {
    if (props.deepLink) {
      const cssId = RouterUtils.convertDeepLinkToCssId(props.deepLink);
      setTimeout(() => BrowserUtils.scrollCenterId(cssId), 3000);
    }
  };

  const startServer = () => {
    const serverStarted = data?.health?.status === 'ONLINE';

    if (serverStarted) setState((prev) => ({ ...prev, serverStarted }));
    else if (!loading && !state.severStarted) {
      setTimeout(() => {
        refetch();
        setState((prev) => ({ ...prev, attemptsToStartServer: prev.attemptsToStartServer + 1 }));
      }, 2000);
    }
  };

  useEffect(goToSubpage, [props.routeId]);

  useEffect(goToDeepLink, [props.deepLink]);

  useEffect(setHeaderOnTopWhenScrolling);

  useEffect(startServer, [state.attemptsToStartServer, data, loading]);

  return (
    <HomeView
      routes={labels}
      onSelectedRoute={onSelectedRoute}
      routeSelected={state.subpage.label[globalState.language]}
      subpageId={state.subpage.id}
    />
  );
};

export default HomePage;

const initialState = (routeId: string): State => {
  const subpage = getSubPageById(routeId);

  return {
    subpage,
    severStarted: false,
    attemptsToStartServer: 0,
  };
};

const getSubPageById = (routeId: string): RouteType => {
  return Object.values(SUB_PAGES_ROUTES).find((e) => e.id === routeId) || SUB_PAGES_ROUTES.WHO_WE_ARE;
};

const setHeaderOnTopWhenScrolling = () => {
  window.addEventListener('scroll', pinHeader);
  return () => {
    window.removeEventListener('scroll', pinHeader);
  };
};

const pinHeader = () => {
  const header = document.getElementById(HEADER_CSS_ID);
  const scrollTop = window.scrollY;

  if (scrollTop >= 190) header?.classList.add(CSS_FIXING_CLASS_NAME);
  else header?.classList.remove(CSS_FIXING_CLASS_NAME);
};
