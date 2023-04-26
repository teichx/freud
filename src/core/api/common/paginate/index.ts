import { GetPaginateProps, GetPaginateResult } from './types';

const INVALID_PAGE_RESPONSE = {
  page: 0,
  limit: 0,
  greaterEqualsThan: 0,
  lessThan: 0,
  error: 'Invalid page',
};

const INVALID_LIMIT_RESPONSE = {
  page: 0,
  limit: 0,
  greaterEqualsThan: 0,
  lessThan: 0,
  error: 'Invalid limit',
};

export const getPaginate = ({
  req,
  maxPaginate = 30,
}: GetPaginateProps): GetPaginateResult => {
  const page = Number(req.query.page || '1');
  if (!Number.isInteger(page)) return INVALID_PAGE_RESPONSE;

  const limit = Number(req.query.limit || '10');
  if (!Number.isInteger(limit)) return INVALID_LIMIT_RESPONSE;

  const limitAfterMin = Math.min(limit, maxPaginate);
  const pageAfterMax = Math.max(page, 1);
  const minIndex = (pageAfterMax - 1) * limitAfterMin;
  const maxIndex = minIndex + limitAfterMin;

  return {
    page: pageAfterMax,
    limit: limitAfterMin,
    greaterEqualsThan: minIndex,
    lessThan: maxIndex,
  };
};
