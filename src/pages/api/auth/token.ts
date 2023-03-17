import { Credentials } from 'google-auth-library';
import type { NextApiRequest, NextApiResponse } from 'next';

import { getClient } from '.';

import { getRedirectUri, sendError } from '..';

export type GetTokenError = {
  message: string;
};

export type GetResultSuccess = Credentials & {
  redirectUri: string;
};

export type GetTokenResult = GetResultSuccess | GetTokenError;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetTokenResult>
) {
  try {
    const {
      body: { code = '', origin = '' },
    } = req;

    if (!code) {
      return res.status(400).send({ message: 'Code not found' });
    }
    if (!origin) {
      return res.status(400).send({ message: 'Origin not found' });
    }

    const redirectUri = getRedirectUri(origin);

    const oauth2Client = getClient(req, { redirectUri });
    const token = await oauth2Client.getToken(code);

    return res.status(200).send({
      ...token.tokens,
      redirectUri,
    });
  } catch (error) {
    return sendError(res, error);
  }
}
