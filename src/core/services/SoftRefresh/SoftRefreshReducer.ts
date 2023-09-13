import { createSlice } from '@reduxjs/toolkit';

import { SOFT_REFRESH_KEY } from './constants';
import { SoftRefreshReducerActions, SoftRefreshStateProps } from './types';

export const SoftRefreshSlice = createSlice<
  SoftRefreshStateProps,
  SoftRefreshReducerActions,
  typeof SOFT_REFRESH_KEY
>({
  name: SOFT_REFRESH_KEY,
  initialState: {
    globalId: '',
    customIds: {},
  },
  reducers: {
    refreshId: (old, { payload: { name, id } }) => ({
      ...old,
      ...(name
        ? { customIds: { ...old.customIds, [name]: id } }
        : { globalId: id }),
    }),
  },
});

export const SoftRefreshReducer = SoftRefreshSlice.reducer;
