'use client';
import { useEffect, useState } from 'react';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';

import { REPLACE_OPTIONS } from '../../constants';
import { FILTER_PREFIX } from '../../filter/constants';
import { getStateByString } from './functions';
import { UseDefaultQuery } from './types';

export const useDefaultQuery: UseDefaultQuery = (
  props,
  { allowEmpty = false } = {}
) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [initialState] = useState(props);
  const pathname = usePathname();
  const router = useRouter();
  const parameters = useSearchParams();
  const stringParameters = parameters?.toString() || '';

  useEffect(() => {
    if (!stringParameters && !stringParameters) setIsInitialized(false);
  }, [allowEmpty, stringParameters]);

  useEffect(() => {
    if (isInitialized) return;
    if (!initialState) return;

    setIsInitialized(true);
    const currentSearch = new URLSearchParams(stringParameters);
    const page = initialState?.pagination?.page;
    if (page && !currentSearch.has('page')) {
      currentSearch.set('page', page.toString());
    }
    const limit = initialState?.pagination?.limit;
    if (limit && !currentSearch.has('limit')) {
      currentSearch.set('limit', limit.toString());
    }

    Object.entries(initialState?.filters || {}).forEach(([key, value]) => {
      const filterKey = `${FILTER_PREFIX}${key}`;
      if (currentSearch.has(filterKey)) return;

      if (!Array.isArray(value)) {
        return currentSearch.set(filterKey, value);
      }
      value.forEach((x) => currentSearch.append(filterKey, x));
    });

    const newRoute = `${pathname}?${currentSearch}`;

    router.replace(newRoute, REPLACE_OPTIONS);
  }, [initialState, router, pathname, stringParameters, isInitialized]);

  return {
    getStateByString,
    stringParameters,
  };
};
