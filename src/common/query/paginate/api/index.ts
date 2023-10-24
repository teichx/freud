import { INITIAL_QUERY_PAGINATION } from '../constants';
import { GetPaginateProps, GetPaginateResult } from './types';

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

const INVALID_LIMIT_RESPONSE = {
  page: 0,
  limit: 0,
  offset: 0,
  error: 'Invalid limit',
  hasBeforePage: false,
  getPagination,
};

const MIN_PAGE = 1;

export const getPaginate = ({
  req,
  maxPaginate = 100,
}: GetPaginateProps): GetPaginateResult => {
  const page = Number(
    req.nextUrl.searchParams.get('page') || INITIAL_QUERY_PAGINATION.page
  );
  if (!Number.isInteger(page)) return INVALID_PAGE_RESPONSE;

  const limit = Number(
    req.nextUrl.searchParams.get('limit') || INITIAL_QUERY_PAGINATION.limit
  );
  if (!Number.isInteger(limit)) return INVALID_LIMIT_RESPONSE;

  const limitAfterMin = maxPaginate ? Math.min(limit, maxPaginate) : limit;
  const pageAfterMax = Math.max(page, MIN_PAGE);
  const offset = (pageAfterMax - 1) * limitAfterMin;
  const hasBeforePage = pageAfterMax > MIN_PAGE;

  const getPagination: GetPaginateResult['getPagination'] = ({
    totalItems,
  }) => ({
    page: pageAfterMax,
    limit: limitAfterMin,
    hasBeforePage,
    hasNextPage: totalItems > limitAfterMin + offset,
    totalItems,
  });

  return {
    page: pageAfterMax,
    limit: limitAfterMin,
    offset,
    hasBeforePage,
    getPagination,
  };
};
