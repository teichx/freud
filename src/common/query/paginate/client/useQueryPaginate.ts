import { useCallback } from 'react';

import { useRouter } from 'next/router';

import { INITIAL_QUERY_PAGINATION } from '../constants';
import { getPage, replaceRoute } from './functions';
import { UseQueryPaginateProps, UseQueryPaginateResult } from './types';

export const useQueryPaginate = ({
  initialPage = INITIAL_QUERY_PAGINATION.page,
  initialLimit = INITIAL_QUERY_PAGINATION.limit,
}: UseQueryPaginateProps = {}): UseQueryPaginateResult => {
  const router = useRouter();
  const {
    query: { page: queryPage, limit: queryLimit },
  } = router;

  const page = Number.isInteger(Number(queryPage))
    ? Number(queryPage)
    : initialPage;
  const limit = Number.isInteger(Number(queryLimit))
    ? Number(queryLimit)
    : initialLimit;

  const toPage = useCallback<UseQueryPaginateResult['toPage']>(
    (nextPageValue) =>
      replaceRoute({
        page: nextPageValue,
        router,
      }),
    [router]
  );

  const nextPage = useCallback<UseQueryPaginateResult['nextPage']>(() => {
    const currentPageValue = getPage({ router });
    const nextPageValue = currentPageValue + 1;
    replaceRoute({
      page: nextPageValue,
      router,
    });
  }, [router]);

  const previousPage = useCallback<
    UseQueryPaginateResult['previousPage']
  >(() => {
    const currentPageValue = getPage({ router });
    const previousPageValue = currentPageValue - 1;
    replaceRoute({
      page: previousPageValue,
      router,
    });
  }, [router]);

  const setLimit = useCallback<UseQueryPaginateResult['setLimit']>(
    (nextLimit) =>
      replaceRoute({
        page: 1,
        limit: nextLimit,
        router,
      }),
    [router]
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
