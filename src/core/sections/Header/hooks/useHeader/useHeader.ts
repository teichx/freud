'use client';
import { useMemo } from 'react';

import { usePathname } from 'next/navigation';

import { useScopedI18n } from '~/i18n/client';

import { MENU_ITEMS } from './const';
import { HeaderItemProps, UseHeaderProps } from './types';

export const useHeader: UseHeaderProps = () => {
  const pathname = usePathname();
  const t = useScopedI18n('translations.header.label');

  const headersItems = useMemo<HeaderItemProps[]>(
    () =>
      MENU_ITEMS.filter(({ isEnabled }) => isEnabled).map(
        ({ path, labelKey }) => ({
          path: path,
          label: t(labelKey),
          isSelected: pathname.includes(path),
        })
      ),
    [t, pathname]
  );

  return {
    headersItems,
  };
};
