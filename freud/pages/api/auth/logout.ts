import { OAuth2Client } from 'google-auth-library';
import { RevokeCredentialsResult } from 'google-auth-library/build/src/auth/oauth2client';
import type { NextApiRequest, NextApiResponse } from 'next';

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
    const {
      headers: { authorization = '' },
    } = req;
    const bearerToken = (authorization || '').replace('Bearer ', '');

    if (!bearerToken) {
      return res.status(200).send({ success: true });
    }

    const oauth2Client = new OAuth2Client({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_AUTHENTICATE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_AUTHENTICATE_CLIENT_SECRET,
    });
    const token = await oauth2Client.revokeToken(bearerToken);

    return res.status(token.status).send({ success: true });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: (<Error>error).message,
    });
  }
}
