import { NextApiRequest } from 'next';

export type ErrorMessage = {
  message: string;
};

export type ReqProps = {
  req: NextApiRequest;
};
