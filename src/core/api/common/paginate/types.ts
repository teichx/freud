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
  hasBeforePage: boolean;
  getPagination: ({ totalItems }: { totalItems: number }) => {
    page: number;
    limit: number;
    hasBeforePage: boolean;
    hasNextPage: boolean;
    totalItems: number;
  };
};

export type PaginateQueryProps = {
  page: number | undefined;
  limit: number | undefined;
};

export type PaginateResultProps = {
  page: number;
  limit: number;
  hasBeforePage: boolean;
  hasNextPage: boolean;
};

export type PaginateResultTotalItems = PaginateResultProps & {
  totalItems: number;
};

export type PaginateRequestSimpleProps = ReqCustomProps<
  PaginateQueryProps,
  unknown
>;
