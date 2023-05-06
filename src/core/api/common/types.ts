import { NextApiRequest, NextApiResponse } from 'next';

export type ErrorMessage = {
  message: string;
};

export type ReqProps = {
  req: ReqCustomQueryProps<unknown>;
};

export type ObjectProps = Record<string, string | number | undefined | boolean>;

export interface ReqCustomQueryProps<T = ObjectProps>
  extends Omit<NextApiRequest, 'query'> {
  query: T;
}

export type RequestHandler<TQueryProps = ObjectProps, TResponse = unknown> = (
  req: ReqCustomQueryProps<TQueryProps>,
  res: NextApiResponse<TResponse>
) => void | Promise<void>;
