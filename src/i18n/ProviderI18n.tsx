'use client';
import { ReactElement, ReactNode } from 'react';

import { I18nProviderClient } from './client';
import { LocaleKeys } from './types';

export const ProviderI18n = ({
  params: { locale },
  children,
}: {
  params: { locale: LocaleKeys };
  children: ReactElement | ReactNode;
}) => <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
