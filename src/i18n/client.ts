'use client';
import { createI18nClient } from 'next-international/client';

import { languages } from './languages';

export const {
  useI18n,
  useScopedI18n,
  I18nProviderClient,
  useChangeLocale,
  useCurrentLocale,
} = createI18nClient(languages, {
  segmentName: 'lang',
});
