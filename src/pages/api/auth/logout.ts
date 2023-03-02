import { RevokeCredentialsResult } from 'google-auth-library/build/src/auth/oauth2client';
import type { NextApiRequest, NextApiResponse } from 'next';

import { getClient } from '.';

import { extractToken } from '..';

export type LogoutError = {
  message: string;
};

export type LogoutSuccess = RevokeCredentialsResult;

export type LogoutResult = LogoutSuccess | LogoutError;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LogoutResult>
) {
  try {
    const bearerToken = extractToken(req);

    if (!bearerToken) {
      return res.status(200).send({ success: true });
    }

    const oauth2Client = getClient(req);
    const token = await oauth2Client.revokeToken(bearerToken);

    return res.status(token.status).send({ success: true });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: (<Error>error).message,
    });
  }
}
