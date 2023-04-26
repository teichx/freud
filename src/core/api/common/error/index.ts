import { EnumHttpStatus } from '../../constants';
import { SendErrorProps } from './types';

export const sendError = ({
  res,
  error,
  extras = {},
  status = EnumHttpStatus.BadRequest,
}: SendErrorProps) =>
  res.status(status).send({
    message: error,
    ...extras,
  });
