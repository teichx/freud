import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useState,
} from 'react';

import { AuthStateProps, useAuthResultProps } from './types';

export const AuthContext = createContext<useAuthResultProps>(
  {} as useAuthResultProps
);

const INITIAL_STATE: AuthStateProps = {
  name: '',
  givenName: '',
  familyName: '',
  picture: '',
  clientId: '',
  email: '',
  logged: false,
};

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
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

  return (
    <AuthContext.Provider
      value={{
        ...state,
        saveData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
