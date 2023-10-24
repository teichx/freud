import { NextResponse } from 'next/server';

import { EnumHttpStatus } from '../constants';
import { SendErrorProps } from './types';

const defaultObject = {};

export const sendError = <TExtras extends object = object>({
  error,
  extras,
  status = 'BadRequest',
}: SendErrorProps<TExtras>) =>
  NextResponse.json(
    {
      message: error,
      ...(extras || defaultObject),
    },
    { status: EnumHttpStatus[status] }
  );
