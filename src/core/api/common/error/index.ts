import { EnumHttpStatus } from '../../constants';
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
