import { NextRequest, NextResponse } from 'next/server';

import { Routes } from '~/core/constants';

export const GET = (req: NextRequest) =>
  NextResponse.redirect(new URL(Routes.Core.Patient.List, req.nextUrl));
