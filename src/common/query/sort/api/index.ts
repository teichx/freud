import { FIELD_SEPARATOR, SORT_TYPE_SEPARATOR } from '../constants';
import { SortType } from '../types';
import { GetSortHandler, GetSortItem } from './types';

export const getSort: GetSortHandler = ({ req }) => ({
  sort: (req.nextUrl.searchParams.get('sort') || '')
    .split(FIELD_SEPARATOR)
    .map<GetSortItem>((key) => {
      const lastIndex = key.lastIndexOf(SORT_TYPE_SEPARATOR);

      return {
        key: key.substring(0, lastIndex),
        sortType: key.substring(lastIndex + 1) as SortType,
      };
    })
    .filter(({ key, sortType }) => !!(key && sortType))
    .filter(
      ({ key }, index, array) => array.findIndex((x) => x.key === key) === index
    ),
});
