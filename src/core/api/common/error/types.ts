import { NextApiResponse } from 'next/types';

import { EnumHttpStatus } from '../../constants';
import { ErrorMessage } from '../types';

export type SendErrorProps = {
  res: NextApiResponse<ErrorMessage>;
  error: string;
  extras?: Record<string, unknown>;
  status?: keyof typeof EnumHttpStatus;
};
