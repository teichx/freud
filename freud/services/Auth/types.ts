import { CaseReducer } from '@reduxjs/toolkit';

export type AuthDataProps = {
  id: string;
  name: string;
  givenName: string;
  familyName: string;
  picture: string;
  clientId: string;
  email: string;
};

export type AuthDataTokenProps = {
  bearer: string;
};

export type AuthStateProps = {
  user: AuthDataProps;
  token?: AuthDataTokenProps;
};

export type AuthStateRef = {
  bearer?: string;
};

export type useAuthResultProps = AuthDataProps & {
  isLogged: boolean;
  saveData: (props: AuthDataProps) => void;
  logout: () => void;
  authenticateFetch: typeof fetch;
  setToken: (props: AuthDataTokenProps) => void;
};

export type useAuthProps = () => useAuthResultProps;

type CustomCaseReducer<T = void> = CaseReducer<
  AuthStateProps,
  { payload: T; type: string }
>;

export type AuthReducerActions = {
  saveData: CustomCaseReducer<AuthDataProps>;
  setToken: CustomCaseReducer<AuthDataTokenProps>;
  logout: CustomCaseReducer;
};
