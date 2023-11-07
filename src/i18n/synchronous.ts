import type { Scopes, FlattenLocale, GetLocaleType } from 'international-types';
import { createT, flattenLocale } from 'next-international';

import { languages } from './languages';
import { FlattenLocaleProps, LocaleKeys, Locales } from './types';

export type LocaleSynchronousProps = {
  [key in keyof typeof languages]: Awaited<ReturnType<Locales[key]>>;
};

export type TempLocale = GetLocaleType<Locales>;

export type LocaleContext = {
  locale: LocaleKeys;
  localeContent: TempLocale extends Record<string, string>
    ? TempLocale
    : FlattenLocale<TempLocale>;
};

const getSynchronousLocation = async () => {
  const entries = [];

  const keys = Object.keys(languages) as (keyof typeof languages)[];
  for (const key of keys) {
    entries.push([key, (await languages[key]()).default]);
  }

  return Object.fromEntries(entries) as LocaleSynchronousProps;
};

const synchronousLocation = await getSynchronousLocation();

export const getSynchronousI18n = (locale: LocaleKeys) =>
  createT(
    {
      locale,
      localeContent: flattenLocale(synchronousLocation[locale] || {}),
    } as LocaleContext,
    undefined
  );

export const getSynchronousScopedI18n = <
  Scope extends Scopes<FlattenLocaleProps>
>(
  locale: LocaleKeys,
  scope: Scope
) =>
  createT(
    {
      locale,
      localeContent: flattenLocale(synchronousLocation[locale] || {}),
    } as LocaleContext,
    scope
  );
