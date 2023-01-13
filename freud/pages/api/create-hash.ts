import { createHash } from 'crypto';
import type { NextApiRequest, NextApiResponse } from 'next';

export type AuthenticateErrorResponse = {
  error: string;
};

export type AuthenticationSuccessResponse = {
  hash: string;
};

export type AuthenticateResponse =
  | AuthenticateErrorResponse
  | AuthenticationSuccessResponse;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AuthenticateResponse>
) {
  try {
    const key = typeof req.query.key === 'string' ? req.query.key : '';
    if (!key) {
      return res.status(400).json({ error: 'Invalid param' });
    }
    const salt = process.env.HASH_SALT || '';

    const hash = createHash('SHA-512')
      .update(`${key}${salt}`)
      .digest('base64url');

    return res.status(200).json({ hash });
  } catch (err) {
    return res.status(412).json({ error: 'Failed on generate hash' });
  }
}
