import type { NextApiRequest } from 'next/types';

import { CustomHeaders } from '~/constants/CustomHeaders';
import { Routes } from '~/constants/Routes';

export const getRedirectUri = (baseUrl: string) =>
  `${baseUrl}${Routes.Core.Authenticated}`;

export const extractRedirectUri = (req: NextApiRequest) =>
  req.headers[CustomHeaders.RedirectUri]?.toString();

export const extractToken = (req: NextApiRequest) =>
  (req.headers.authorization || '').replace('Bearer', '').trim();

export const getToken = (req: NextApiRequest) =>
  req.headers.authorization || '';
