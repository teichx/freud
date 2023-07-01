import { CaseReducer } from '@reduxjs/toolkit';

import { LOADER_VARIANT } from './variant';

export type LoaderType = (typeof LOADER_VARIANT)[number];

export type LoaderProps = {
  [key in LoaderType]?: {
    isLoading: boolean;
  };
};

export type LoaderStateProps = LoaderProps;

export type useLoaderResultProps = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  startLoading: () => void;
  endLoading: () => void;
};

export type UseLoader = (
  loader: LoaderType,
  ...identifier: LoaderType[]
) => useLoaderResultProps;

type CustomCaseReducer<T = void> = CaseReducer<
  LoaderStateProps,
  { payload: T; type: string }
>;

export type LoaderReducerActions = {
  setIsLoading: CustomCaseReducer<{
    identifiers: LoaderType[];
    isLoading: boolean;
  }>;
};
