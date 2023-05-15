import { INITIAL_QUERY_PAGINATION } from './constants';

export type KeyOfState = keyof typeof INITIAL_QUERY_PAGINATION;

export type UseQueryPaginationResult = typeof INITIAL_QUERY_PAGINATION & {
  toPage: (pageNumber: number) => void;
  nextPage: () => void;
  previousPage: () => void;
  setLimit: (limit: number) => void;
};

export type UseQueryPaginationProps = {
  initialPage?: number;
  initialLimit?: number;
};
