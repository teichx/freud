import { useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import * as Options from '~/core/locales/options';

export const useFormSelectOptions = () => {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'options',
  });

  const getOptions = useCallback(
    (option: keyof typeof Options) =>
      Options[option].map((x) => ({
        value: x,
        label: t(`${option}.${x}`),
      })),
    [t]
  );

  return {
    getOptions,
  };
};
