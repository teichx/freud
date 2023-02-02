import { OAuth2Client } from 'google-auth-library';
import type { NextApiRequest, NextApiResponse } from 'next';

const AUTHENTICATION_SCOPES = ['profile', 'email'];

export const getRedirectUri = (baseUrl: string) =>
  `${baseUrl}/core/authenticated`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const baseUrl = decodeURIComponent(req.query.baseUrl as string);

  const oauth2Client = new OAuth2Client({
    clientId: process.env.NEXT_PUBLIC_GOOGLE_AUTHENTICATE_CLIENT_ID,
    redirectUri: getRedirectUri(baseUrl),
  });

  const url = oauth2Client.generateAuthUrl({
    scope: AUTHENTICATION_SCOPES,
    access_type: 'offline',
    response_type: 'code',
  });

  return res.redirect(url);
}
