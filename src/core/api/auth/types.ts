import { Credentials } from 'google-auth-library';
import { NextApiResponse } from 'next';

import { ErrorMessage, ReqProps } from '../common';

export type GenerateTokenSuccess = Credentials & {
  redirectUri: string;
};

export type GenerateTokenResponse = GenerateTokenSuccess | ErrorMessage;

export type RefreshTokenSuccess = Credentials;

export type RefreshTokenResponse = RefreshTokenSuccess | ErrorMessage;

export type HandleGetCustomerId = (
  req: ReqProps['req'],
  res: NextApiResponse
) => Promise<
  | {
      customerId: string;
      authError: '';
    }
  | {
      customerId?: undefined;
      authError: string;
    }
>;
