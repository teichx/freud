import type { NextApiRequest } from 'next';

export const AUTHENTICATION_SCOPES = ['profile', 'email'];

export const getRedirectUri = (baseUrl: string) =>
  `${baseUrl}/core/authenticated`;

export const extractToken = (req: NextApiRequest) =>
  (req.headers.authorization || '').replace('Bearer ', '');
