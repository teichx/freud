'use client';
import { useMemo } from 'react';

import { useSearchParams } from 'next/navigation';

import { FILTER_PREFIX } from '../constants';
import { UseQueryFilterByName, UseQueryFilterByNameResult } from './types';

const defaultParameters = new URLSearchParams();

export const useQueryFilterByName: UseQueryFilterByName = (name) => {
  const searchParams = useSearchParams() || defaultParameters;

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
