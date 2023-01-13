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

export type AuthStateProps = AuthDataProps & {
  logged: boolean;
};

export type AuthStateRef = {
  bearer?: string;
};

export type useAuthResultProps = AuthStateProps & {
  saveData: (props: AuthDataProps) => void;
  authenticateFetch: typeof fetch;
  setToken: (props: AuthDataTokenProps) => void;
};

export type useAuthProps = () => useAuthResultProps;
