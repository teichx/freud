import { Credentials } from 'google-auth-library';
import type { NextApiRequest, NextApiResponse } from 'next';

import { getRefreshClient } from '.';

import { extractToken } from '..';

export type RefreshTokenError = {
  message: string;
};

export type RefreshTokenSuccess = Credentials;

export type RefreshTokenResult = RefreshTokenSuccess | RefreshTokenError;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RefreshTokenResult>
) {
  try {
    const bearerToken = extractToken(req);

    if (!bearerToken) {
      return res.status(200).send({ message: 'Invalid token' });
    }

    const oauth2RefreshClient = getRefreshClient(req);
    const { credentials } = await oauth2RefreshClient.refreshAccessToken();

    return res.status(200).send(credentials);
  } catch (error) {
    return res.status(400).send({
      message: (<Error>error).message,
    });
  }
}
