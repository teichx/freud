import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useRef,
  useState,
} from 'react';

import { AuthStateProps, AuthStateRef, useAuthResultProps } from './types';

const INITIAL_STATE: AuthStateProps = {
  id: '',
  name: '',
  givenName: '',
  familyName: '',
  picture: '',
  clientId: '',
  email: '',
  logged: false,
};

export const AuthContext = createContext<useAuthResultProps>({
  ...INITIAL_STATE,
  saveData: () => undefined,
  authenticateFetch: () => Promise.resolve(new Response()),
  setToken: () => undefined,
});

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const tokenRef = useRef<AuthStateRef>({});
  const [state, setState] = useState<AuthStateProps>(INITIAL_STATE);

  const saveData = useCallback<useAuthResultProps['saveData']>(
    (data) =>
      setState((old) => ({
        ...old,
        ...data,
        logged: true,
      })),
    []
  );

  const authenticateFetch = useCallback<
    useAuthResultProps['authenticateFetch']
  >(
    (input, init) =>
      fetch(input, {
        ...(init || {}),
        headers: {
          ...(init?.headers || {}),
          Authorization: `Bearer ${tokenRef.current.bearer || ''}`,
        },
      }),
    []
  );

  const setToken = useCallback<useAuthResultProps['setToken']>((token) => {
    tokenRef.current = token;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        saveData,
        setToken,
        authenticateFetch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
