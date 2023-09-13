import { EnumHttpStatus } from '../../constants';
import { TNextRequest } from '../types';
import { SendErrorProps } from './types';

export const sendError = ({
  res,
  error,
  extras = {},
  status = 'BadRequest',
}: SendErrorProps) =>
  res.status(EnumHttpStatus[status]).send({
    message: error,
    ...extras,
  });

export const errorMiddleware =
  <T extends TNextRequest = TNextRequest>(callback: T) =>
  async (req: Parameters<T>['0'], res: Parameters<T>['1']) => {
    try {
      return await callback(req, res);
    } catch (error) {
      sendError({ res, error: `${error}` });
    }
  };
