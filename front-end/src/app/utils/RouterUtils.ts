/**
 * Function responsible for converting strings deep links in css id to scroll the page to the location of the page's
 * deep-link. So, the deep links can be turned into css id.
 *
 * @param {string} deepLink - are string links with the following characteristic: /{path}/{second-path}/...
 * @returns {string} cssId - "path-second-path"
 */
const convertDeepLinkToCssId = (deepLink: string): string => {
  if (!deepLink) return deepLink;

  return deepLink
    .split('/')
    .filter((e) => !!e)
    .join('-');
};

const RouterUtils = {
  convertDeepLinkToCssId,
};

export default RouterUtils;
