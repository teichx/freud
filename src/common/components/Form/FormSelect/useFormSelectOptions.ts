import { useCallback } from 'react';

import { useScopedI18n } from '~/i18n/client';

import * as Options from './options';
import { AllOptionsKeys } from './options/types';

export const useFormSelectOptions = () => {
  const t = useScopedI18n('translations.options');

  const getOptions = useCallback(
    (option: keyof typeof Options) =>
      Options[option].map((x) => ({
        value: x,
        label: t(`${option}.${x}` as AllOptionsKeys),
      })),
    [t]
  );

  return {
    getOptions,
  };
};
