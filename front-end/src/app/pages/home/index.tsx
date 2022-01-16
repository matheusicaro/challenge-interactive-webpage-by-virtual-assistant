import { useQuery } from '@apollo/client';
import React, { useContext, useEffect, useState } from 'react';
import { GET_HEALTH, HealthData } from '../../graphql/queries/start-server';

import { RouteType } from '../../routes';

import { globalContext } from '../../store';
import { Language } from '../../store/language/types';
import { useTheme } from '../../styles/provider';
import BrowserUtils from '../../utils/BrowserUtils';
import RouterUtils from '../../utils/RouterUtils';
import HomeView, { CSS_FIXING_CLASS_NAME, HEADER_CSS_ID } from './HomeView';
import { SUB_PAGES_ROUTES, SUB_PAGES_LABELS } from './subpages';

type State = {
  subpage: RouteType;
  severStarted: boolean;
  attemptsToStartServer: number;
  initialLoader: boolean;
};

type Props = {
  deepLink?: string;
  routeId: string;
};

const HomePage: React.FC<Props> = (props) => {
  const { theme } = useTheme();

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

  const disableLoader = () => {
    setTimeout(() => setState((prev) => ({ ...prev, initialLoader: false })), 8000);
  };

  useEffect(goToSubpage, [props.routeId]);

  useEffect(goToDeepLink, [props.deepLink]);

  useEffect(setFixedHeader, [theme]);

  useEffect(setHeaderOnTopWhenScrolling);

  useEffect(startServer, [state.attemptsToStartServer, data, loading]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(disableLoader, []);

  return (
    <HomeView
      routes={labels}
      handleSelectedHeaderOption={handleSelectedHeaderOption}
      routeSelected={state.subpage.label[globalState.language]}
      subpageId={state.subpage.id}
      initialLoader={state.initialLoader}
      language={globalState.language}
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
    initialLoader: true,
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
  window.addEventListener('scroll', setFixedHeader);
  return () => {
    window.removeEventListener('scroll', setFixedHeader);
  };
};

const setFixedHeader = () => {
  const header = document.getElementById(HEADER_CSS_ID);
  const scrollTop = window.scrollY;

  if (scrollTop >= 190) header?.classList.add(CSS_FIXING_CLASS_NAME);
  else header?.classList.remove(CSS_FIXING_CLASS_NAME);
};

const updateStateForNewAttemptsToStartServer = (prev: State): State => ({
  ...prev,
  attemptsToStartServer: prev.attemptsToStartServer + 1,
});
