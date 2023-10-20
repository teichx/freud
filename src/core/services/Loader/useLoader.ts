'use client';
import { useCallback, useState } from 'react';

import { useAppDispatch, useAppSelector } from '~/common/reducer';

import { LoaderSlice } from './LoaderReducer';
import { LoaderType, UseLoader, useLoaderResultProps } from './types';

export const useLoader: UseLoader = (loader, ...identifiersParam) => {
  const [identifiers] = useState([loader, ...identifiersParam]);
  const loaders = useAppSelector((x) => x.loader);
  const isLoading = Object.entries(loaders)
    .filter(([key]) => identifiers.includes(key as LoaderType))
    .some(([, x]) => x.isLoading);
  const dispatch = useAppDispatch();

  const setIsLoading = useCallback<useLoaderResultProps['setIsLoading']>(
    (isLoadingParam) =>
      dispatch(
        LoaderSlice.actions.setIsLoading({
          identifiers,
          isLoading: isLoadingParam,
        })
      ),
    [dispatch, identifiers]
  );

  const startLoading = useCallback<useLoaderResultProps['startLoading']>(
    () =>
      dispatch(
        LoaderSlice.actions.setIsLoading({ identifiers, isLoading: true })
      ),
    [dispatch, identifiers]
  );

  const endLoading = useCallback<useLoaderResultProps['endLoading']>(
    () =>
      dispatch(
        LoaderSlice.actions.setIsLoading({ identifiers, isLoading: false })
      ),
    [dispatch, identifiers]
  );

  return {
    isLoading,
    setIsLoading,
    startLoading,
    endLoading,
  };
};
