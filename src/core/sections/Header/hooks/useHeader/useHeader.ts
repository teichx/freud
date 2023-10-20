'use client';
import { useMemo } from 'react';

import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { MENU_ITEMS } from './const';
import { HeaderItemProps, UseHeaderProps } from './types';

export const useHeader: UseHeaderProps = () => {
  const pathname = usePathname();
  const { t } = useTranslation('translations', {
    keyPrefix: 'header.label',
  });

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
