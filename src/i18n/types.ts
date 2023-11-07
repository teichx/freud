import { GetLocaleType, FlattenLocale } from 'international-types';
import { NextRequest, NextResponse } from 'next/server';

import { languages } from './languages';

export type Locales = typeof languages;

export type LocaleKeys = keyof Locales;

export type FlattenLocaleProps = FlattenLocale<GetLocaleType<Locales>>;
export type FlattenLocaleKeys = keyof FlattenLocaleProps;

export type CleanedScopeKeys = {
  [key in FlattenLocaleKeys]: string;
};

declare module 'next-international/middleware' {
  export function createI18nMiddleware(
    config: unknown
  ): (request: NextRequest) => NextResponse<unknown>;
}
