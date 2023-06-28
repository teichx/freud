import { NextApiRequest, NextApiResponse } from 'next';

export type ErrorMessage = {
  message: string;
};

export type ReqProps = {
  req: ReqCustomProps<unknown, unknown>;
};

export interface ReqCustomProps<TQuery, TBody>
  extends Omit<NextApiRequest, 'query' | 'body'> {
  query: TQuery;
  body: TBody;
}

export type RequestQueryHandler<TQueryProps, TResponse> = (
  req: ReqCustomProps<TQueryProps, unknown>,
  res: NextApiResponse<TResponse>
) => void | Promise<void>;

export type RequestBodyHandler<TBodyProps, TResponse> = (
  req: ReqCustomProps<unknown, TBodyProps>,
  res: NextApiResponse<TResponse>
) => void | Promise<void>;

export type RequestQueryBodyHandler<TQueryProps, TBodyProps, TResponse> = (
  req: ReqCustomProps<TQueryProps, TBodyProps>,
  res: NextApiResponse<TResponse>
) => void | Promise<void>;

export type RequestHandler<TResponse> = (
  req: ReqCustomProps<unknown, unknown>,
  res: NextApiResponse<TResponse>
) => void | Promise<void>;
