import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { REPLACE_OPTIONS } from '../../constants';
import { FILTER_PREFIX } from '../../filter/constants';
import { splitPath } from '../../path';
import { getStateByString } from './functions';
import { UseDefaultQuery } from './types';

export const useDefaultQuery: UseDefaultQuery = (
  props,
  { allowEmpty = false } = {}
) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [initialState] = useState(props);
  const router = useRouter();
  const { parameters, isFinal } = splitPath(router);
  const stringParameters = parameters.toString();

  useEffect(() => {
    if (!stringParameters && !stringParameters) setIsInitialized(false);
  }, [allowEmpty, stringParameters]);

  useEffect(() => {
    if (isInitialized) return;
    if (!initialState) return;
    if (!isFinal) return;
    const { baseUrl } = splitPath(router);

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

    const newRoute = {
      pathname: baseUrl,
      search: currentSearch.toString(),
    };

    router.replace(newRoute, undefined, REPLACE_OPTIONS);
  }, [initialState, router, isFinal, stringParameters, isInitialized]);

  return {
    getStateByString,
    stringParameters,
  };
};
