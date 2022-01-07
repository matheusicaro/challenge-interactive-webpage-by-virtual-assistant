import React, { useContext, useEffect, useState } from 'react';

import { RouteType } from '../../routes';

import { globalContext } from '../../store';
import BrowserUtils from '../../utils/BrowserUtils';
import RouterUtils from '../../utils/RouterUtils';
import HomeView, { CSS_FIXING_CLASS_NAME, HEADER_CSS_ID } from './HomeView';
import { SUB_PAGES_ROUTES, SUB_PAGES_LABELS } from './subpages';

type Props = {
  deepLink?: string;
  routeId: string;
};

const HomePage: React.FC<Props> = (props) => {
  const [subpage, setSubpage] = useState<RouteType>(getSubPageById(props.routeId));
  const { globalState } = useContext(globalContext);

  const labels = SUB_PAGES_LABELS(globalState.language);

  const onSelectedRoute = (label: string) => {
    const subpageSelected = Object.values(SUB_PAGES_ROUTES).find((e) => e.label[globalState.language] === label);
    setSubpage(subpageSelected || SUB_PAGES_ROUTES.WHO_WE_ARE);
  };

  useEffect(() => {
    setTimeout(() => setSubpage(getSubPageById(props.routeId)), 2000);
  }, [props.routeId]);

  useEffect(() => {
    if (props.deepLink) {
      // setTimeout(() => BrowserUtils.scrollUp(), 2000);
      const cssId = RouterUtils.convertDeepLinkToCssId(props.deepLink);
      setTimeout(() => BrowserUtils.scrollCenterId(cssId), 3000);
    }
  }, [props.deepLink]);

  useEffect(() => {
    window.addEventListener('scroll', pinHeader);
    return () => {
      window.removeEventListener('scroll', pinHeader);
    };
  });

  return (
    <HomeView
      routes={labels}
      onSelectedRoute={onSelectedRoute}
      routeSelected={subpage.label[globalState.language]}
      subpageId={subpage.id}
    />
  );
};

export default HomePage;

const getSubPageById = (routeId: string): RouteType => {
  return Object.values(SUB_PAGES_ROUTES).find((e) => e.id === routeId) || SUB_PAGES_ROUTES.WHO_WE_ARE;
};

const pinHeader = () => {
  const header = document.getElementById(HEADER_CSS_ID);
  const scrollTop = window.scrollY;

  if (scrollTop >= 190) header?.classList.add(CSS_FIXING_CLASS_NAME);
  else header?.classList.remove(CSS_FIXING_CLASS_NAME);
};
