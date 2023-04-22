import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '~/reducer';

import { LoaderSlice } from './LoaderReducer';
import { LoaderStateProps, useLoaderResultProps } from './types';

export const useLoader = (): useLoaderResultProps => {
  const { isLoading }: LoaderStateProps = useAppSelector((x) => x.loader);
  const dispatch = useAppDispatch();

  const setIsLoading = useCallback<useLoaderResultProps['setIsLoading']>(
    (isLoadingParam) =>
      dispatch(LoaderSlice.actions.setIsLoading({ isLoading: isLoadingParam })),
    [dispatch]
  );

  const startLoading = useCallback<useLoaderResultProps['startLoading']>(
    () => dispatch(LoaderSlice.actions.setIsLoading({ isLoading: true })),
    [dispatch]
  );

  const endLoading = useCallback<useLoaderResultProps['endLoading']>(
    () => dispatch(LoaderSlice.actions.setIsLoading({ isLoading: false })),
    [dispatch]
  );

  return {
    isLoading,
    setIsLoading,
    startLoading,
    endLoading,
  };
};
