import { useMemo } from 'react';

import { useRouter } from 'next/router';

import { splitPath } from '../../path';
import { FILTER_PREFIX } from '../constants';
import { UseQueryFilterByName, UseQueryFilterByNameResult } from './types';

const EMPTY: string[] = [];
const DEFAULT_RESULT: UseQueryFilterByNameResult = {
  queryFilter: '',
  queryFilterArray: EMPTY,
  hasQueryFilter: false,
};

export const useQueryFilterByName: UseQueryFilterByName = (name) => {
  const router = useRouter();

  const { isFinal, parameters } = splitPath(router);
  const stringParameters = parameters.toString();

  const result = useMemo<UseQueryFilterByNameResult>(() => {
    if (!isFinal) return DEFAULT_RESULT;

    const updatedParameters = new URLSearchParams(stringParameters);
    const queryFilterArray = updatedParameters.getAll(
      `${FILTER_PREFIX}${name}`
    );

    return {
      queryFilter: queryFilterArray.find(Boolean) || '',
      queryFilterArray,
      hasQueryFilter: !!queryFilterArray.length,
    };
  }, [name, isFinal, stringParameters]);

  return result;
};
