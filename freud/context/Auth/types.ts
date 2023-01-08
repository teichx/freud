export type AuthDataProps = {
  name: string;
  givenName: string;
  familyName: string;
  picture: string;
  clientId: string;
  email: string;
};

export type AuthStateProps = AuthDataProps & {
  logged: boolean;
};

export type useAuthResultProps = AuthStateProps & {
  saveData: (props: AuthDataProps) => void;
};

export type useAuthProps = () => useAuthResultProps;
