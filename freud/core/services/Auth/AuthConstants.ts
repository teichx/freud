import { AuthStateProps } from './types';

export const AUTH_INITIAL_STATE: AuthStateProps = {
  user: {
    id: '',
    name: '',
    givenName: '',
    familyName: '',
    picture: '',
    clientId: '',
    email: '',
  },
  token: undefined,
};

export const AUTH_KEY = 'auth';
