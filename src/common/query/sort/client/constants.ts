import { SortOrder } from '../types';

export const NextSortOrder = {
  [SortOrder.asc]: SortOrder.desc,
  [SortOrder.desc]: SortOrder.unsorted,
  [SortOrder.unsorted]: SortOrder.asc,
} as const;
