import { OAuth2Client } from 'google-auth-library';
import type { NextApiRequest, NextApiResponse } from 'next';

import { Routes } from '~/constants/Routes';

const AUTHENTICATION_SCOPES = ['profile'];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const [baseUrl] = (req.headers.referer || '').split(Routes.ApiPrefix);

  const redirectUri = `${baseUrl}/authenticated`;
  const oauth2Client = new OAuth2Client({
    clientId: process.env.NEXT_PUBLIC_GOOGLE_AUTHENTICATE_CLIENT_ID,
    redirectUri,
  });

  const url = oauth2Client.generateAuthUrl({
    scope: AUTHENTICATION_SCOPES,
    access_type: 'offline',
    response_type: 'token code',
  });

  return res.redirect(url);
}
