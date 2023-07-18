import { Credentials } from 'google-auth-library';
import { NextApiRequest } from 'next';

import { ErrorMessage } from '../common';

export type GenerateTokenSuccess = Credentials & {
  redirectUri: string;
};

export type GenerateTokenResponse = GenerateTokenSuccess | ErrorMessage;

export type RefreshTokenSuccess = Credentials;

export type RefreshTokenResponse = RefreshTokenSuccess | ErrorMessage;

export type HandleGetCustomerId = (req: Pick<NextApiRequest, 'headers'>) =>
  | {
      customerId: string;
      authError: '';
    }
  | {
      customerId?: undefined;
      authError: string;
    };
