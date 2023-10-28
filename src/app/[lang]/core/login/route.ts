import { NextRequest, NextResponse } from 'next/server';

import { ProjectRoutes } from '~/core/constants';

export const GET = (req: NextRequest) =>
  NextResponse.redirect(new URL(ProjectRoutes.Home, req.nextUrl));
