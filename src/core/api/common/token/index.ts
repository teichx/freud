import { ReqProps } from '../types';

export const extractToken = ({ req }: ReqProps) =>
  (req.headers.authorization || '').replace('Bearer', '').trim();

export const getToken = ({ req }: ReqProps) => req.headers.authorization || '';
