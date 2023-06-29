import { NextRouter } from 'next/router';

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

export type ReplaceRouterProps = {
  page?: number;
  limit?: number;
  router: NextRouter;
};

export type RouterProps = {
  router: NextRouter;
};
