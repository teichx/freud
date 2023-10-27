import { createI18nServer } from 'next-international/server';

import { languages } from './languages';

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } =
  createI18nServer(languages);
