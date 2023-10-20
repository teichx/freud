'use client';
import { useMemo } from 'react';

import { useSearchParams } from 'next/navigation';

import { FILTER_PREFIX } from '../constants';
import { UseQueryFilterByName, UseQueryFilterByNameResult } from './types';

export const useQueryFilterByName: UseQueryFilterByName = (name) => {
  const searchParams = useSearchParams();

  const result = useMemo<UseQueryFilterByNameResult>(() => {
    const queryFilterArray = searchParams.getAll(`${FILTER_PREFIX}${name}`);

    return {
      queryFilter: queryFilterArray.find(Boolean) || '',
      queryFilterArray,
      hasQueryFilter: !!queryFilterArray.length,
    };
  }, [name, searchParams]);

  return result;
};
