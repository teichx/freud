import { createSlice } from '@reduxjs/toolkit';

import { LOADER_INITIAL_STATE, LOADER_KEY } from './LoaderConstants';
import { LoaderReducerActions, LoaderStateProps } from './types';

export const LoaderSlice = createSlice<
  LoaderStateProps,
  LoaderReducerActions,
  typeof LOADER_KEY
>({
  name: LOADER_KEY,
  initialState: LOADER_INITIAL_STATE,
  reducers: {
    setIsLoading: (old, { payload: { identifiers, isLoading } }) => ({
      ...old,
      ...Object.fromEntries(identifiers.map((x) => [x, { isLoading }])),
    }),
  },
});

export const LoaderReducer = LoaderSlice.reducer;
