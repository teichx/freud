import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useState,
} from 'react';

import { AuthStateProps, useAuthResultProps } from './types';

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
});

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
