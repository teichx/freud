export type UseDefaultQueryResult = {
  stringParameters: string;
  getStateByString: (
    stringParameters: string
  ) => Record<string, string | string[]>;
};

export type UseQueryOptionsProps = {
  allowEmpty?: boolean;
};

export type UseDefaultQuery = (
  props?: {
    pagination?: {
      page?: string | number;
      limit?: string | number;
    };
    filters?: Record<string, string | string[]>;
  },
  options?: UseQueryOptionsProps
) => UseDefaultQueryResult;
