const DocumentScrollIntoView = (cssId: string, position: 'center' | 'start' | 'end') => {
  if (cssId) document.getElementById(cssId)?.scrollIntoView({ behavior: 'smooth', block: position });
};

const scrollUp = () => DocumentScrollIntoView('root', 'start');
const scrollUpId = (cssId: string) => DocumentScrollIntoView(cssId, 'start');
const scrollCenterId = (cssId: string) => DocumentScrollIntoView(cssId, 'center');

const getLanguage = (): string => {
  try {
    const pageLanguage = window.navigator.language;
    const browserLanguage = pageLanguage.slice(0, pageLanguage.indexOf('-')).toUpperCase();
    return browserLanguage;
  } catch (error: any) {
    return 'EN';
  }
};

const replaceUrlBrowser = (path: string, title = '') => window.history.replaceState('', title, path);

const BrowserUtils = {
  scrollUp,
  scrollUpId,
  scrollCenterId,
  getLanguage,
  replaceUrlBrowser,
};

export default BrowserUtils;
