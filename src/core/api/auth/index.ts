import type { NextApiRequest, NextApiResponse } from 'next';

import { sendError } from '../common';
import {
  GOOGLE_AUTHENTICATION_SCOPES,
  getClient,
  getRefreshClient,
} from '../common/google';
import { getRedirectUri } from '../common/redirect';
import { extractToken } from '../common/token';
import { EnumHttpStatus } from '../constants';
import { GenerateTokenResponse, RefreshTokenResponse } from './types';

export const generateLoginUrl = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const baseUrl = decodeURIComponent(req.query.baseUrl as string);

  const oauth2Client = getClient({
    redirectUri: getRedirectUri(baseUrl),
  });

  const url = oauth2Client.generateAuthUrl({
    scope: GOOGLE_AUTHENTICATION_SCOPES,
    access_type: 'offline',
    response_type: 'code',
  });

  return res.redirect(url);
};

export const generateToken = async (
  req: NextApiRequest,
  res: NextApiResponse<GenerateTokenResponse>
) => {
  const {
    body: { code = '', origin = '' },
  } = req;

  if (!code) return sendError({ res, error: 'Code not found' });
  if (!origin) return sendError({ res, error: 'Origin not found' });

  const redirectUri = getRedirectUri(origin);

  const oauth2Client = getClient({ redirectUri });
  const token = await oauth2Client.getToken(code);

  return res.status(EnumHttpStatus.Success).send({
    ...token.tokens,
    redirectUri,
  });
};

export const refreshToken = async (
  req: NextApiRequest,
  res: NextApiResponse<RefreshTokenResponse>
) => {
  const bearerToken = extractToken({ req });

  if (!bearerToken) return sendError({ res, error: 'Without token' });

  const oauth2RefreshClient = getRefreshClient({ req });
  const { credentials } = await oauth2RefreshClient.refreshAccessToken();

  return res.status(200).send(credentials);
};

export const logout = async (req: NextApiRequest, res: NextApiResponse) => {
  const bearerToken = extractToken({ req });

  if (!bearerToken)
    return res.status(EnumHttpStatus.Success).send({ success: true });

  const oauth2Client = getClient();
  await oauth2Client.revokeToken(bearerToken);

  return res.status(EnumHttpStatus.Success).send({ success: true });
};
