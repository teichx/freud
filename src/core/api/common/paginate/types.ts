import { ReqCustomQueryProps, RequestHandler } from '../types';

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

export type PaginateRequest<T = Record<string, string | number>> =
  ReqCustomQueryProps<PaginateQueryProps & T>;

export type PaginateRequestSimpleProps =
  ReqCustomQueryProps<PaginateQueryProps>;

export type PaginateHandler<
  TQueryProps = Record<string, string | number>,
  TResponse = unknown
> = RequestHandler<PaginateRequest<TQueryProps>, TResponse>;
