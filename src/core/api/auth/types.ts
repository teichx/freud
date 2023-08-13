import { NextApiResponse } from 'next';

import { ReqProps } from '../common';

export type HandleGetCustomerId = (
  req: ReqProps['req'],
  res: NextApiResponse
) => Promise<
  | {
      customerId: string;
      authError: '';
    }
  | {
      customerId?: undefined;
      authError: string;
    }
>;
