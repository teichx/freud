import { ReqCustomProps } from '~/core/api/common';

import { SortType } from '../types';

export type GetSortProps = {
  req: SortRequestProps;
};

export type GetSortItem = {
  key: string;
  sortType: SortType;
};

export type GetSortResult = {
  sort: GetSortItem[];
};

export type SortQueryProps = {
  sort: string;
};

export type SortRequestProps = ReqCustomProps<SortQueryProps, unknown>;

export type GetSortHandler = (props: GetSortProps) => GetSortResult;
