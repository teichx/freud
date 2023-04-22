import { CaseReducer } from '@reduxjs/toolkit';

export type LoaderProps = {
  isLoading: boolean;
};

export type LoaderStateProps = LoaderProps;

export type useLoaderResultProps = LoaderStateProps & {
  setIsLoading: (isLoading: boolean) => void;
  startLoading: () => void;
  endLoading: () => void;
};

type CustomCaseReducer<T = void> = CaseReducer<
  LoaderStateProps,
  { payload: T; type: string }
>;

export type LoaderReducerActions = {
  setIsLoading: CustomCaseReducer<LoaderProps>;
};
