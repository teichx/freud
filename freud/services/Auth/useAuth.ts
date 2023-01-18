import { useCallback } from 'react';

import { useRouter } from 'next/router';

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

  const logout = useCallback<useAuthResultProps['logout']>(
    () => dispatch(AuthSlice.actions.logout()),
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
        },
      }),
    [state.token?.bearer]
  );

  const setToken = useCallback<useAuthResultProps['setToken']>(
    (data) => dispatch(AuthSlice.actions.setToken(data)),
    [dispatch]
  );

  const toInitialPage = useCallback<useAuthResultProps['toInitialPage']>(
    () => router.push('/app/dashboard'),
    [router]
  );

  return {
    ...state.user,
    isLogged: !!state?.user?.id,
    logout,
    saveData,
    setToken,
    toInitialPage,
    authenticateFetch,
  };
};
