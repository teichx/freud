'use client';
import { PropsWithChildren } from 'react';

import { useSoftRefresh } from './useSoftRefresh';

export function SoftRefreshWrapper({ children }: PropsWithChildren) {
  const { id } = useSoftRefresh();

  return <div key={id}>{children}</div>;
}
