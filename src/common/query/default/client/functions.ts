import { FILTER_PREFIX } from '../../filter/constants';

export const getStateByString = (stringParameters: string) => {
  const currentSearch = new URLSearchParams(stringParameters);

  const filterEntries = Array.from(currentSearch.keys())
    .map<[string, string[]]>((key) => [key, currentSearch.getAll(key)])
    .map<[string, string | string[]]>(([key, value]) => [
      key,
      value.length > 1 ? value : value[0],
    ])
    .map(([key, value]) => [key.replace(FILTER_PREFIX, ''), value]);

  return Object.fromEntries(filterEntries);
};
