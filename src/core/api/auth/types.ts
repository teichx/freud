import { Credentials } from 'google-auth-library';

import { ErrorMessage } from '../common';

export type GenerateTokenSuccess = Credentials & {
  redirectUri: string;
};

export type GenerateTokenResponse = GenerateTokenSuccess | ErrorMessage;

export type RefreshTokenSuccess = Credentials;

export type RefreshTokenResponse = RefreshTokenSuccess | ErrorMessage;
