export type FilterValueType = number | string | (number | string)[];

export type UseQueryFilterResult = {
  getFilters: () => Record<string, string[]>;
  setFilters: (props: Record<string, FilterValueType>) => void;
  combineFilters: (key: string, values: FilterValueType) => void;
};

export type UseQueryFilter = () => UseQueryFilterResult;
