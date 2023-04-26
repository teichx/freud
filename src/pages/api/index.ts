import type { NextApiRequest, NextApiResponse } from 'next/types';

import { Routes } from '~/core/constants/Routes';

export const getRedirectUri = (baseUrl: string) =>
  `${baseUrl}${Routes.Core.Authenticated}`;

export const extractToken = (req: NextApiRequest) =>
  (req.headers.authorization || '').replace('Bearer', '').trim();

export const getToken = (req: NextApiRequest) =>
  req.headers.authorization || '';

export const sendError = (
  res: NextApiResponse<{ message: string }>,
  error: unknown,
  extras = {}
) =>
  res.status(400).send({
    message: (error as Error)?.message || `${error}`,
    ...extras,
  });
