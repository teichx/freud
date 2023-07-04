import { SortType } from '../types';

export type SetSortProps = {
  key: string;
  type: SortType;
};

export type ToggleSortProps = {
  key: string;
};

export type GetSortTuples = [string, SortType][];

export type UseQuerySortResult = {
  getSortTuples: () => GetSortTuples;
  setSort: ({ key, type }: SetSortProps) => void;
  setUniqueSort: ({ key, type }: SetSortProps) => void;
  toggleSort: ({ key }: ToggleSortProps) => void;
  toggleUniqueSort: ({ key }: ToggleSortProps) => void;
};

export type UseQuerySort = () => UseQuerySortResult;
