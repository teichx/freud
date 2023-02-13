import type { NextApiRequest } from 'next/types';

import { CustomHeaders } from '~/constants/CustomHeaders';

export const getRedirectUri = (baseUrl: string) =>
  `${baseUrl}/core/authenticated`;

export const extractRedirectUri = (req: NextApiRequest) =>
  req.headers[CustomHeaders.RedirectUri]?.toString();

export const extractToken = (req: NextApiRequest) =>
  (req.headers.authorization || '').replace('Bearer ', '');

export const getToken = (req: NextApiRequest) =>
  req.headers.authorization || '';
