import { Credentials, OAuth2Client } from 'google-auth-library';
import type { NextApiRequest, NextApiResponse } from 'next';

import { getRedirectUri } from '.';

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

    const oauth2Client = new OAuth2Client({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_AUTHENTICATE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_AUTHENTICATE_CLIENT_SECRET,
      redirectUri,
    });
    const token = await oauth2Client.getToken(code);

    return res.status(200).send({
      ...token.tokens,
      redirectUri,
    });
  } catch (error) {
    return res.status(400).send({
      message: (<Error>error).message,
    });
  }
}
