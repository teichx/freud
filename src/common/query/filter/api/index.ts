import { FILTER_PREFIX } from '../constants';
import { GetFilterProps, GetFilterResult } from './types';

export function getFilter<TFilter extends Record<string, unknown>>({
  req,
}: GetFilterProps<TFilter>): GetFilterResult<TFilter> {
  const searchParams = req.nextUrl.searchParams;
  const keyValues = Array.from(searchParams.keys())
    .filter((key) => key.startsWith(FILTER_PREFIX))
    .map<[string, string | string[] | undefined]>((key) => {
      const allValues = searchParams
        .getAll(key)
        .filter(Boolean)
        .filter((x) => x !== 'undefined');
      if (!allValues.length) return [key, undefined];

      const value = allValues.length > 1 ? allValues : allValues[0];
      return [key, value];
    })
    .filter(([, value]) => !!value)
    .map(([key, value]) => [key.replace(FILTER_PREFIX, ''), value]);

  return {
    filter: Object.fromEntries(keyValues),
  };
}
