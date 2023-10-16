import { NextApiResponse } from 'next';

import { ReqProps } from '~/core/api';

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
