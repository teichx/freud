import { NextApiRequest } from 'next/types';

export type GetPaginateProps = {
  req: NextApiRequest;
  maxPaginate?: number;
};

export type GetPaginateResult = {
  page: number;
  limit: number;
  offset: number;
  error?: string;
};
