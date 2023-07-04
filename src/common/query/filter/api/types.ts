import { ReqCustomProps } from '~/core/api/common';

export type GetFilterProps = {
  req: FilterRequestProps;
};

export type GetFilterResult<TFilter> = {
  filter: TFilter;
};

export type FilterRequestProps = ReqCustomProps<
  Record<string, string>,
  unknown
>;

export type GetFilterHandler<TFilter = unknown> = (
  props: GetFilterProps
) => GetFilterResult<TFilter>;
