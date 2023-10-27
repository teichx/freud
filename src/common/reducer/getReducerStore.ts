import { configureStore } from '@reduxjs/toolkit';
import { PERSIST, REHYDRATE } from 'redux-persist';
import { createStateSyncMiddleware } from 'redux-state-sync';

import { rootReducer } from './rootReducer';

export function getReducerStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(
        createStateSyncMiddleware({
          blacklist: [PERSIST, REHYDRATE],
          broadcastChannelOption: {
            type: typeof window === 'undefined' ? 'simulate' : 'native',
          },
        })
      ),
  });
}
