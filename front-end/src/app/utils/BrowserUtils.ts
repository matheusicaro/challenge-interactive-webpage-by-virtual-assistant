const DocumentScrollIntoView = (cssId: string, position: 'center' | 'start' | 'end') => {
  if (cssId) document.getElementById(cssId)?.scrollIntoView({ behavior: 'smooth', block: position });
};

const scrollUp = () => DocumentScrollIntoView('root', 'start');
const scrollUpId = (cssId: string) => DocumentScrollIntoView(cssId, 'start');
const scrollCenterId = (cssId: string) => DocumentScrollIntoView(cssId, 'center');

const BrowserUtils = {
  scrollUp,
  scrollUpId,
  scrollCenterId,
};

export default BrowserUtils;
