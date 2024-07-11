import { INITIAL_QUERY_PAGINATION } from '../constants';
import { GetLimitProps, GetPaginateProps, GetPaginateResult } from './types';

const getPaginationResult = {
  page: 0,
  limit: 0,
  totalItems: 0,
  hasNextPage: false,
  hasBeforePage: false,
};

const getPagination = () => getPaginationResult;

const INVALID_PAGE_RESPONSE = {
  page: 0,
  limit: 0,
  offset: 0,
  error: 'Invalid page',
  hasBeforePage: false,
  getPagination,
};

const MIN_PAGE = 1;

export const getLimit = ({
  req,
  maxPaginate = 100,
  defaultLimit = INITIAL_QUERY_PAGINATION.limit,
}: GetLimitProps) => {
  const limitParam = Number(
    req.nextUrl.searchParams.get('limit') || defaultLimit
  );
  if (!Number.isInteger(limitParam)) return { limit: 0 };
  const limit = maxPaginate ? Math.min(limitParam, maxPaginate) : limitParam;

  return { limit };
};

export const getPaginate = ({
  req,
  maxPaginate = 100,
  defaultLimit = INITIAL_QUERY_PAGINATION.limit,
}: GetPaginateProps): GetPaginateResult => {
  const page = Number(
    req.nextUrl.searchParams.get('page') || INITIAL_QUERY_PAGINATION.page
  );
  if (!Number.isInteger(page)) return INVALID_PAGE_RESPONSE;

  const { limit } = getLimit({ req, maxPaginate, defaultLimit });
  if (limit === 0) return INVALID_PAGE_RESPONSE;

  const pageAfterMax = Math.max(page, MIN_PAGE);
  const offset = (pageAfterMax - 1) * limit;
  const hasBeforePage = pageAfterMax > MIN_PAGE;

  const getPagination: GetPaginateResult['getPagination'] = ({
    totalItems,
  }) => ({
    page: pageAfterMax,
    limit,
    hasBeforePage,
    hasNextPage: totalItems > limit + offset,
    totalItems,
  });

  return {
    page: pageAfterMax,
    limit,
    offset,
    hasBeforePage,
    getPagination,
  };
};
