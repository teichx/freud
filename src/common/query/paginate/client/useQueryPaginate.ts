'use client';
import { useCallback } from 'react';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';

import { REPLACE_OPTIONS } from '../../constants';
import { INITIAL_QUERY_PAGINATION } from '../constants';
import { UseQueryPaginateProps, UseQueryPaginateResult } from './types';

const defaultParameters = new URLSearchParams();

export const useQueryPaginate = ({
  initialPage = INITIAL_QUERY_PAGINATION.page,
  initialLimit = INITIAL_QUERY_PAGINATION.limit,
}: UseQueryPaginateProps = {}): UseQueryPaginateResult => {
  const parameters = useSearchParams() || defaultParameters;
  const pathname = usePathname();
  const router = useRouter();

  const queryPage = parameters.get('page');
  const queryLimit = parameters.get('limit');

  const page = Number.isInteger(Number(queryPage))
    ? Number(queryPage)
    : initialPage;
  const limit = Number.isInteger(Number(queryLimit))
    ? Number(queryLimit)
    : initialLimit;

  const toPage = useCallback<UseQueryPaginateResult['toPage']>(
    (nextPageValue) => {
      const updatedUrlParameters = new URLSearchParams(parameters);
      updatedUrlParameters.set('page', nextPageValue.toString());
      router.replace(`${pathname}?${updatedUrlParameters}`, REPLACE_OPTIONS);
    },
    [router, pathname, parameters]
  );

  const nextPage = useCallback<UseQueryPaginateResult['nextPage']>(() => {
    const updatedUrlParameters = new URLSearchParams(parameters);
    updatedUrlParameters.set('page', (page + 1).toString());
    router.replace(`${pathname}?${updatedUrlParameters}`, REPLACE_OPTIONS);
  }, [router, pathname, parameters, page]);

  const previousPage = useCallback<
    UseQueryPaginateResult['previousPage']
  >(() => {
    const updatedUrlParameters = new URLSearchParams(parameters);
    updatedUrlParameters.set('page', (page - 1).toString());
    router.replace(`${pathname}?${updatedUrlParameters}`, REPLACE_OPTIONS);
  }, [router, pathname, parameters, page]);

  const setLimit = useCallback<UseQueryPaginateResult['setLimit']>(
    (nextLimit) => {
      const updatedUrlParameters = new URLSearchParams(parameters);
      updatedUrlParameters.set('limit', nextLimit.toString());
      router.replace(`${pathname}?${updatedUrlParameters}`, REPLACE_OPTIONS);
    },
    [router, pathname, parameters]
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
