import { createI18nMiddleware } from 'next-international/middleware';

import { languagesKey } from './languages';

export const middleware = createI18nMiddleware({
  locales: languagesKey,
  defaultLocale: languagesKey[0],
});
