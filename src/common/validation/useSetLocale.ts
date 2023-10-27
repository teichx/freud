'use client';

import { useEffect, useState } from 'react';

import { setLocale } from 'yup';

import { useCurrentLocale, useScopedI18n } from '~/i18n/client';
import { LocaleKeys } from '~/i18n/types';

export const useSetLocale = () => {
  const [loadedLocale, setLoadedLocale] = useState<LocaleKeys>();
  const locale = useCurrentLocale();
  const t = useScopedI18n('validation');

  useEffect(() => {
    if (loadedLocale === locale) return;

    setLocale({
      mixed: {
        default: t('mixed.invalid'),
        required: t('mixed.required'),
        oneOf: (x) => t('mixed.oneOf', x),
        notOneOf: (x) => t('mixed.notOneOf', x),
        notNull: t('mixed.notNull'),
        notType: t('mixed.notType'),
        defined: t('mixed.defined'),
      },
      string: {
        length: (x) => t('string.length', x),
        min: (x) => t('string.min', x),
        max: (x) => t('string.max', x),
        email: t('string.email'),
        url: t('string.url'),
        uuid: t('string.uuid'),
      },
      number: {
        min: (x) => t('number.min', x),
        max: (x) => t('number.max', x),
        lessThan: (x) => t('number.lessThan', x),
        moreThan: (x) => t('number.moreThan', x),
        positive: t('number.positive'),
        negative: t('number.negative'),
        integer: t('number.integer'),
      },
      date: {
        min: (x) => t('date.min', x),
        max: (x) => t('date.max', x),
      },
      boolean: {
        isValue: t('boolean.isValue'),
      },
      object: {
        noUnknown: t('object.noUnknown'),
      },
      array: {
        length: (x) => t('array.length', x),
        min: (x) => t('array.min', x),
        max: (x) => t('array.max', x),
      },
    });

    setLoadedLocale(locale);
  }, [t, locale, loadedLocale]);
};
