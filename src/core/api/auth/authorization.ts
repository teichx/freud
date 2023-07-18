import { HandleGetCustomerId } from './types';

const AUTHENTICATION_ERROR = {
  authError: 'Cannot be authenticated, authorization header is not filled',
};

export const getCustomerId: HandleGetCustomerId = (req) => {
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader) return AUTHENTICATION_ERROR;

  return { customerId: '123', authError: '' };
};
