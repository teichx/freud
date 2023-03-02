import type { NextApiRequest, NextApiResponse } from 'next';

import { AUTHENTICATION_SCOPES, getClient } from '.';

import { getRedirectUri } from '..';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const baseUrl = decodeURIComponent(req.query.baseUrl as string);

  const oauth2Client = getClient(req, {
    redirectUri: getRedirectUri(baseUrl),
  });

  const url = oauth2Client.generateAuthUrl({
    scope: AUTHENTICATION_SCOPES,
    access_type: 'offline',
    response_type: 'code',
  });

  return res.redirect(url);
}
