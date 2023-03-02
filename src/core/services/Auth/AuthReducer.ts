import { createSlice } from '@reduxjs/toolkit';

import { AUTH_INITIAL_STATE, AUTH_KEY } from './AuthConstants';
import { AuthReducerActions, AuthStateProps } from './types';

export const AuthSlice = createSlice<
  AuthStateProps,
  AuthReducerActions,
  typeof AUTH_KEY
>({
  name: AUTH_KEY,
  initialState: AUTH_INITIAL_STATE,
  reducers: {
    saveData: (old, { payload }) => ({
      ...old,
      user: {
        ...(old?.user || {}),
        ...payload,
      },
    }),
    logout: (old) => ({
      ...old,
      ...AUTH_INITIAL_STATE,
    }),
    setToken: (old, { payload }) => ({
      ...old,
      token: {
        ...(old?.token || {}),
        ...payload,
      },
    }),
  },
});

export const { saveData } = AuthSlice.actions;

export const AuthReducer = AuthSlice.reducer;
