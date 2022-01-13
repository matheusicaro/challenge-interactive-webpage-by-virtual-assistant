import { useQuery } from '@apollo/client';
import React, { useContext, useEffect, useState } from 'react';
import { GET_HEALTH, HealthData } from '../../graphql/queries/start-server';

import { RouteType } from '../../routes';

import { globalContext } from '../../store';
import { Language } from '../../store/language/types';
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

  const handleSelectedHeaderOption = (option: string) => {
    const subpage = getSubpage(option, globalState.language);
    setState((prev) => ({ ...prev, subpage }));
    BrowserUtils.replaceUrlBrowser(subpage.path);
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
      const refetchAgain = () => {
        refetch();
        setState(updateStateForNewAttemptsToStartServer);
      };

      setTimeout(refetchAgain, 2000);
    }
  };

  useEffect(goToSubpage, [props.routeId]);

  useEffect(goToDeepLink, [props.deepLink]);

  useEffect(setHeaderOnTopWhenScrolling);

  useEffect(startServer, [state.attemptsToStartServer, data, loading]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <HomeView
      routes={labels}
      handleSelectedHeaderOption={handleSelectedHeaderOption}
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

const getSubpage = (label: string, language: Language): RouteType => {
  const subpageSelected = Object.values(SUB_PAGES_ROUTES).find((e) => e.label[language] === label);
  return subpageSelected || SUB_PAGES_ROUTES.WHO_WE_ARE;
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

const updateStateForNewAttemptsToStartServer = (prev: State): State => ({
  ...prev,
  attemptsToStartServer: prev.attemptsToStartServer + 1,
});
