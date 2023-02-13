import {
  OAuth2Client,
  OAuth2ClientOptions,
  UserRefreshClient,
} from 'google-auth-library';
import type { NextApiRequest } from 'next';

import { extractRedirectUri, extractToken } from '..';

export const AUTHENTICATION_SCOPES = ['profile', 'email'];

export const getClient = (
  req: NextApiRequest | undefined,
  options?: OAuth2ClientOptions
) =>
  new OAuth2Client({
    clientId: process.env.NEXT_PUBLIC_GOOGLE_AUTHENTICATE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_AUTHENTICATE_CLIENT_SECRET,
    redirectUri: req ? extractRedirectUri(req) : undefined,
    ...(options || {}),
  });

export const getRefreshClient = (req: NextApiRequest) =>
  new UserRefreshClient({
    clientId: process.env.NEXT_PUBLIC_GOOGLE_AUTHENTICATE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_AUTHENTICATE_CLIENT_SECRET,
    refreshToken: extractToken(req),
  });
