import { useCallback } from 'react';

import { useRouter } from 'next/router';

import { REPLACE_OPTIONS } from '../../constants';
import { splitPath } from '../../path';
import { FILTER_PREFIX } from '../constants';
import { FilterValueType, UseQueryFilter, UseQueryFilterResult } from './types';

const hasFilterPrefix = (key: string) => key.startsWith(FILTER_PREFIX);

export const useQueryFilter: UseQueryFilter = () => {
  const router = useRouter();

  const getFilters: UseQueryFilterResult['getFilters'] = useCallback(() => {
    const { isFinal, parameters } = splitPath(router);
    if (!isFinal) return;

    const filterEntries = Array.from(parameters.keys())
      .filter(hasFilterPrefix)
      .map<[string, string[]]>((key) => [key, parameters.getAll(key)])
      .map<[string, string | string[]]>(([key, value]) => [
        key,
        value.length > 1 ? value : value[0],
      ])
      .map(([key, value]) => [key.replace(FILTER_PREFIX, ''), value]);

    return Object.fromEntries(filterEntries);
  }, [router]);

  const setFilters: UseQueryFilterResult['setFilters'] = useCallback(
    (filters) => {
      const { isFinal, baseUrl, parameters } = splitPath(router);
      if (!isFinal) return;

      Array.from(parameters.keys())
        .filter(hasFilterPrefix)
        .forEach((key) => parameters.delete(key));

      Object.entries(filters)
        .map(([key, value]) => [key.replace(FILTER_PREFIX, ''), value])
        .map<[string, FilterValueType]>(([key, value]) => [
          `${FILTER_PREFIX}${key}`,
          value,
        ])
        .forEach(([key, value]) => {
          if (!Array.isArray(value)) {
            return parameters.set(key, value.toString());
          }
          value.map((x) => parameters.append(key, x.toString()));
        });

      const newRoute = {
        pathname: baseUrl,
        search: parameters.toString(),
      };

      router.replace(newRoute, undefined, REPLACE_OPTIONS);
    },
    [router]
  );

  const combineFilters: UseQueryFilterResult['combineFilters'] = useCallback(
    (filterKey, filterValue) => {
      const { isFinal, baseUrl, parameters } = splitPath(router);
      if (!isFinal) return;

      const filterCombinedKey = `${FILTER_PREFIX}${filterKey}`;
      parameters.delete(filterCombinedKey);

      if (Array.isArray(filterValue)) {
        filterValue.forEach((x) =>
          parameters.append(filterCombinedKey, x.toString())
        );
      } else {
        parameters.set(filterCombinedKey, filterValue.toString());
      }

      const newRoute = {
        pathname: baseUrl,
        search: parameters.toString(),
      };

      router.replace(newRoute, undefined, REPLACE_OPTIONS);
    },
    [router]
  );

  return {
    setFilters,
    getFilters,
    combineFilters,
  };
};
