import Router from 'next/router';

import { REPLACE_OPTIONS } from '../../constants';
import { splitPath } from '../../path';
import { FILTER_PREFIX } from '../constants';
import { FilterValueType, UseQueryFilter, UseQueryFilterResult } from './types';

const hasFilterPrefix = (key: string) => key.startsWith(FILTER_PREFIX);

const getFilters: UseQueryFilterResult['getFilters'] = () => {
  const { isFinal, parameters } = splitPath(Router);
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
};

const setFilters: UseQueryFilterResult['setFilters'] = (filters) => {
  const { isFinal, baseUrl, parameters } = splitPath(Router);
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

  Router.replace(newRoute, undefined, REPLACE_OPTIONS);
};

export const useQueryFilter: UseQueryFilter = () => ({
  getFilters,
  setFilters,
});
