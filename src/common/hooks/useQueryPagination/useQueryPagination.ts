import { useCallback, useEffect } from 'react';

import Router from 'next/router';

import { INITIAL_QUERY_PAGINATION, REPLACE_OPTIONS } from './constants';
import { getPage, getUrlParams } from './functions';
import { UseQueryPaginationProps, UseQueryPaginationResult } from './types';

export const useQueryPagination = ({
  initialPage = INITIAL_QUERY_PAGINATION.page,
  initialLimit = INITIAL_QUERY_PAGINATION.limit,
}: UseQueryPaginationProps = {}): UseQueryPaginationResult => {
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

    const urlParams = getUrlParams(Router);
    if (urlParams.has('page') || urlParams.has('limit')) return;
    urlParams.set('page', initialPage.toString());
    urlParams.set('limit', initialLimit.toString());

    const newRoute = {
      pathname: Router.pathname,
      search: urlParams.toString(),
    };

    Router.replace(newRoute, undefined, REPLACE_OPTIONS);
  }, [queryPage, queryLimit, initialPage, initialLimit]);

  const toPage = useCallback<UseQueryPaginationResult['toPage']>(
    (nextPageValue) => {
      const urlParams = getUrlParams(Router);
      urlParams.set('page', nextPageValue.toString());

      const newRoute = {
        pathname: Router.pathname,
        search: urlParams.toString(),
      };

      Router.replace(newRoute, undefined, REPLACE_OPTIONS);
    },
    []
  );

  const nextPage = useCallback<UseQueryPaginationResult['nextPage']>(() => {
    const urlParams = getUrlParams(Router);
    const currentPageValue = getPage(urlParams);
    const nextPageValue = currentPageValue + 1;
    urlParams.set('page', nextPageValue.toString());

    const newRoute = {
      pathname: Router.pathname,
      search: urlParams.toString(),
    };

    Router.replace(newRoute, undefined, REPLACE_OPTIONS);
  }, []);

  const previousPage = useCallback<
    UseQueryPaginationResult['previousPage']
  >(() => {
    const urlParams = getUrlParams(Router);
    const currentPageValue = getPage(urlParams);
    const previousPageValue = currentPageValue - 1;
    urlParams.set('page', previousPageValue.toString());

    const newRoute = {
      pathname: Router.pathname,
      search: urlParams.toString(),
    };

    Router.replace(newRoute, undefined, REPLACE_OPTIONS);
  }, []);

  const setLimit = useCallback<UseQueryPaginationResult['setLimit']>(
    (nextLimit) => {
      const urlParams = getUrlParams(Router);

      urlParams.set('page', `${1}`);
      urlParams.set('limit', nextLimit.toString());

      const newRoute = {
        pathname: Router.pathname,
        search: urlParams.toString(),
      };

      Router.replace(newRoute, undefined, REPLACE_OPTIONS);
    },
    []
  );

  return {
    page,
    limit,
    toPage,
    nextPage,
    previousPage,
    setLimit: setLimit,
  };
};
