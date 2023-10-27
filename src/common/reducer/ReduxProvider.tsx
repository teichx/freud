'use client';
import { PropsWithChildren } from 'react';

import { Provider } from 'react-redux';

import { getReducerStore } from './getReducerStore';

const store = getReducerStore();

export function ReduxProvider({ children }: PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>;
}
