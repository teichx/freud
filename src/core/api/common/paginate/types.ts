import { ReqCustomProps } from '../types';

export type GetPaginateProps = {
  req: PaginateRequestSimpleProps;
  maxPaginate?: number;
};

export type GetPaginateResult = {
  page: number;
  limit: number;
  offset: number;
  error?: string;
};

export type PaginateQueryProps = {
  page: number | undefined;
  limit: number | undefined;
};

export type PaginateRequestSimpleProps = ReqCustomProps<
  PaginateQueryProps,
  unknown
>;
