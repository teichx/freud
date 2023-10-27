'use client';
import { useCallback } from 'react';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';

import { REPLACE_OPTIONS } from '../../constants';
import { FILTER_PREFIX } from '../constants';
import { FilterValueType, UseQueryFilter, UseQueryFilterResult } from './types';

const hasFilterPrefix = (key: string) => key.startsWith(FILTER_PREFIX);

export const useQueryFilter: UseQueryFilter = () => {
  const parameters = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const getFilters: UseQueryFilterResult['getFilters'] = useCallback(() => {
    const filterEntries = Array.from(parameters.keys())
      .filter(hasFilterPrefix)
      .map<[string, string[]]>((key) => [key, parameters.getAll(key)])
      .map<[string, string | string[]]>(([key, value]) => [
        key,
        value.length > 1 ? value : value[0],
      ])
      .map(([key, value]) => [key.replace(FILTER_PREFIX, ''), value]);

    return Object.fromEntries(filterEntries);
  }, [parameters]);

  const setFilters: UseQueryFilterResult['setFilters'] = useCallback(
    (filters) => {
      const updatedParameters = new URLSearchParams(parameters);
      Array.from(updatedParameters.keys())
        .filter(hasFilterPrefix)
        .forEach((key) => updatedParameters.delete(key));

      Object.entries(filters)
        .map(([key, value]) => [key.replace(FILTER_PREFIX, ''), value])
        .map<[string, FilterValueType]>(([key, value]) => [
          `${FILTER_PREFIX}${key}`,
          value,
        ])
        .forEach(([key, value]) => {
          if (!Array.isArray(value)) {
            return updatedParameters.set(key, value.toString());
          }
          value.map((x) => updatedParameters.append(key, x.toString()));
        });

      const newRoute = `${pathname}?${updatedParameters}`;

      router.replace(newRoute, REPLACE_OPTIONS);
    },
    [router, pathname, parameters]
  );

  const combineFilters: UseQueryFilterResult['combineFilters'] = useCallback(
    (filterKey, filterValue) => {
      const updatedParameters = new URLSearchParams(parameters);
      const filterCombinedKey = `${FILTER_PREFIX}${filterKey}`;
      updatedParameters.delete(filterCombinedKey);

      if (Array.isArray(filterValue)) {
        filterValue.forEach((x) =>
          updatedParameters.append(filterCombinedKey, x.toString())
        );
      } else {
        updatedParameters.set(filterCombinedKey, filterValue.toString());
      }

      const newRoute = `${pathname}?${updatedParameters}`;

      router.replace(newRoute, REPLACE_OPTIONS);
    },
    [router, pathname, parameters]
  );

  return {
    setFilters,
    getFilters,
    combineFilters,
  };
};
