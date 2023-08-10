import { getServerSession } from 'next-auth';

import { authOptions } from '~/pages/api/auth/[...nextauth]';

import { HandleGetCustomerId } from './types';

const AUTHENTICATION_ERROR = {
  authError: 'Cannot be authenticated, authorization header is not filled',
};

export const getCustomerId: HandleGetCustomerId = async (req, res) => {
  const session = await getServerSession(req, res, authOptions);
  const id = (session?.user as { id?: string })?.id;

  if (!id) return AUTHENTICATION_ERROR;

  return { customerId: id, authError: '' };
};
