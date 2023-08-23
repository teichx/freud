import { FILTER_PREFIX } from '../constants';
import { GetFilterProps, GetFilterResult } from './types';

export function getFilter<TFilter extends Record<string, unknown>>({
  req,
}: GetFilterProps<TFilter>): GetFilterResult<TFilter> {
  const keyValues = Object.entries(req.query)
    .filter(([key]) => key.startsWith(FILTER_PREFIX))
    .map(([key, value]) => [key.replace(FILTER_PREFIX, ''), value]);

  return {
    filter: Object.fromEntries(keyValues),
  };
}
