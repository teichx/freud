'use client';
import { ReactElement } from 'react';

import { useSetLocale } from '~/common/validation/useSetLocale';

import { I18nProviderClient } from './client';
import { LocaleKeys } from './types';

const InternalI18n = ({ children }: { children: ReactElement }) => {
  useSetLocale();

  return children;
};

export const ProviderI18n = ({
  params: { locale },
  children,
}: {
  params: { locale: LocaleKeys };
  children: ReactElement;
}) => (
  <I18nProviderClient locale={locale}>
    <InternalI18n>{children}</InternalI18n>
  </I18nProviderClient>
);
