import { useCallback } from 'react';

import { useRouter } from 'next/router';

import { useAppDispatch, useAppSelector } from '~/common/reducer';
import { ApiRoutes, Routes } from '~/core/constants';

import { AuthSlice } from './AuthReducer';
import { AuthStateProps, useAuthResultProps } from './types';

export const useAuth = (): useAuthResultProps => {
  const router = useRouter();
  const state: AuthStateProps = useAppSelector((x) => x.auth);
  const dispatch = useAppDispatch();

  const saveData = useCallback<useAuthResultProps['saveData']>(
    (data) => dispatch(AuthSlice.actions.saveData(data)),
    [dispatch]
  );

  const authenticateFetch = useCallback<
    useAuthResultProps['authenticateFetch']
  >(
    (input, init) =>
      fetch(input, {
        ...(init || {}),
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          ...(init?.headers || {}),
          Authorization: `Bearer ${state.token?.bearer || ''}`,
        },
      }),
    [state.token?.bearer]
  );

  const logout = useCallback<useAuthResultProps['logout']>(() => {
    authenticateFetch(ApiRoutes.Auth.Logout).finally(() => {
      dispatch(AuthSlice.actions.logout());
    });
  }, [dispatch, authenticateFetch]);

  const setToken = useCallback<useAuthResultProps['setToken']>(
    (data) => dispatch(AuthSlice.actions.setToken(data)),
    [dispatch]
  );

  const toInitialPage = useCallback<useAuthResultProps['toInitialPage']>(
    () => router.push(Routes.Core.Dashboard.Default),
    [router]
  );

  return {
    ...state.user,
    isLogged: !!state.token?.bearer,
    logout,
    saveData,
    setToken,
    toInitialPage,
    authenticateFetch,
  };
};
