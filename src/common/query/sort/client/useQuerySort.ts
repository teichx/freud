import Router from 'next/router';

import { REPLACE_OPTIONS } from '../../constants';
import { splitPath } from '../../path';
import { FIELD_SEPARATOR, SORT_TYPE_SEPARATOR } from '../constants';
import { SortOrder, SortType } from '../types';
import { NextSortOrder } from './constants';
import { UseQuerySort, UseQuerySortResult } from './types';

const getSortTuples: UseQuerySortResult['getSortTuples'] = () => {
  const { isFinal, parameters } = splitPath(Router);
  if (!isFinal) return [];

  const filterEntries = (parameters.get('sort') || '')
    .split(FIELD_SEPARATOR)
    .map<[string, SortType]>((key) => {
      const lastIndex = key.lastIndexOf(SORT_TYPE_SEPARATOR);

      return [
        key.substring(0, lastIndex),
        key.substring(lastIndex + 1) as SortType,
      ];
    })
    .filter(([key]) => !!key)
    .filter(
      ([key], index, array) =>
        array.findIndex(([currentKey]) => currentKey === key) === index
    );

  return filterEntries;
};

const setSort: UseQuerySortResult['setSort'] = ({ key, type }) => {
  const { isFinal, baseUrl, parameters } = splitPath(Router);
  if (!isFinal) return;
  parameters.delete('sort');

  const sortBy = getSortTuples();

  const nextSort = (
    type === 'unsorted'
      ? sortBy.filter(([currentKey]) => currentKey !== key)
      : [...sortBy, [key, type]].map(([mapKey, mapType]) =>
          mapKey === key ? [mapKey, type] : [mapKey, mapType]
        )
  )
    .filter(
      ([filterKey], index, array) =>
        array.findIndex(([currentKey]) => currentKey === filterKey) === index
    )
    .map(([currentKey, value]) => `${currentKey}${SORT_TYPE_SEPARATOR}${value}`)
    .join(FIELD_SEPARATOR);

  if (nextSort.length) {
    parameters.set('sort', nextSort);
  }

  const newRoute = {
    pathname: baseUrl,
    search: parameters.toString(),
  };

  Router.replace(newRoute, undefined, REPLACE_OPTIONS);
};

const setUniqueSort: UseQuerySortResult['setUniqueSort'] = ({ key, type }) => {
  const { isFinal, baseUrl, parameters } = splitPath(Router);
  if (!isFinal) return;

  parameters.delete('sort');
  if (type !== 'unsorted') {
    parameters.set('sort', `${key}${SORT_TYPE_SEPARATOR}${type}`);
  }

  const newRoute = {
    pathname: baseUrl,
    search: parameters.toString(),
  };

  Router.replace(newRoute, undefined, REPLACE_OPTIONS);
};

const getNextSort = (key: string) => {
  const sortBy = getSortTuples();

  const currentItem = sortBy.find(([filterKey]) => filterKey === key);
  if (!currentItem) {
    return [...sortBy, [key, SortOrder[NextSortOrder[SortOrder.unsorted]]]];
  }

  const [, sortType] = currentItem;
  const nextSort = NextSortOrder[SortOrder[sortType]];
  if (nextSort === SortOrder.unsorted) {
    return sortBy.filter(([filterKey]) => filterKey !== key);
  }

  return sortBy.map(([filterKey, currentSort]) => [
    filterKey,
    filterKey === key ? SortOrder[nextSort] : currentSort,
  ]);
};

const toggleSort: UseQuerySortResult['toggleSort'] = ({ key }) => {
  const { isFinal, baseUrl, parameters } = splitPath(Router);
  if (!isFinal) return;

  const nextSort = getNextSort(key)
    .map(([currentKey, value]) => `${currentKey}${SORT_TYPE_SEPARATOR}${value}`)
    .join(FIELD_SEPARATOR);

  parameters.delete('sort');
  if (nextSort.length) {
    parameters.set('sort', nextSort);
  }

  const newRoute = {
    pathname: baseUrl,
    search: parameters.toString(),
  };

  Router.replace(newRoute, undefined, REPLACE_OPTIONS);
};

const toggleUniqueSort: UseQuerySortResult['toggleUniqueSort'] = ({ key }) => {
  const { isFinal, baseUrl, parameters } = splitPath(Router);
  if (!isFinal) return;

  const nextSort = getNextSort(key).find(([currentKey]) => currentKey === key);

  parameters.delete('sort');
  if (nextSort) {
    const [, sortType] = nextSort;
    parameters.set('sort', `${key}${SORT_TYPE_SEPARATOR}${sortType}`);
  }

  const newRoute = {
    pathname: baseUrl,
    search: parameters.toString(),
  };

  Router.replace(newRoute, undefined, REPLACE_OPTIONS);
};

export const useQuerySort: UseQuerySort = () => ({
  getSortTuples,
  setSort,
  setUniqueSort,
  toggleSort,
  toggleUniqueSort,
});
