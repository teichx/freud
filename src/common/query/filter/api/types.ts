import { ReqCustomProps } from '~/core/api';

export type GetFilterProps<TFilter extends Record<string, unknown>> = {
  req: FilterRequestProps<TFilter>;
};

export type GetFilterResult<TFilter> = {
  filter: TFilter;
};

export type FilterRequestProps<
  TFilter extends Record<string, unknown> = Record<string, unknown>
> = ReqCustomProps<TFilter, unknown>;

export type GetFilterHandler<
  TFilter extends Record<string, unknown> = Record<string, unknown>
> = (props: GetFilterProps<TFilter>) => GetFilterResult<TFilter>;
