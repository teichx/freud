import { useCallback, useEffect } from 'react';

import Router from 'next/router';

import { INITIAL_QUERY_PAGINATION } from '../constants';
import { getPage, replaceRoute } from './functions';
import { UseQueryPaginateProps, UseQueryPaginateResult } from './types';

export const useQueryPaginate = ({
  initialPage = INITIAL_QUERY_PAGINATION.page,
  initialLimit = INITIAL_QUERY_PAGINATION.limit,
}: UseQueryPaginateProps = {}): UseQueryPaginateResult => {
  const {
    query: { page: queryPage, limit: queryLimit },
  } = Router;

  const page = Number.isInteger(Number(queryPage))
    ? Number(queryPage)
    : initialPage;
  const limit = Number.isInteger(Number(queryLimit))
    ? Number(queryLimit)
    : initialLimit;

  useEffect(() => {
    if (typeof queryPage !== 'undefined') return;
    if (typeof queryLimit !== 'undefined') return;

    replaceRoute({
      page: initialPage,
      limit: initialLimit,
      router: Router,
    });
  }, [queryPage, queryLimit, initialPage, initialLimit]);

  const toPage = useCallback<UseQueryPaginateResult['toPage']>(
    (nextPageValue) =>
      replaceRoute({
        page: nextPageValue,
        router: Router,
      }),
    []
  );

  const nextPage = useCallback<UseQueryPaginateResult['nextPage']>(() => {
    const currentPageValue = getPage({ router: Router });
    const nextPageValue = currentPageValue + 1;
    replaceRoute({
      page: nextPageValue,
      router: Router,
    });
  }, []);

  const previousPage = useCallback<
    UseQueryPaginateResult['previousPage']
  >(() => {
    const currentPageValue = getPage({ router: Router });
    const previousPageValue = currentPageValue - 1;
    replaceRoute({
      page: previousPageValue,
      router: Router,
    });
  }, []);

  const setLimit = useCallback<UseQueryPaginateResult['setLimit']>(
    (nextLimit) =>
      replaceRoute({
        page: 1,
        limit: nextLimit,
        router: Router,
      }),
    []
  );

  return {
    page,
    limit,
    toPage,
    nextPage,
    previousPage,
    setLimit,
  };
};
