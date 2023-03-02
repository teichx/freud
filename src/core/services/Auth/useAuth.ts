import { useCallback } from 'react';

import { useRouter } from 'next/router';

import { CustomHeaders } from '~/constants/CustomHeaders';
import { ApiRoutes, Routes } from '~/constants/Routes';
import { useAppDispatch, useAppSelector } from '~/reducer';

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
          ...(init?.headers || {}),
          Authorization: `Bearer ${state.token?.bearer || ''}`,
          [CustomHeaders.RedirectUri]: state.token?.redirectUri || '',
        },
      }),
    [state.token?.bearer, state.token?.redirectUri]
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
