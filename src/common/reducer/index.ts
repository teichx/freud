import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { PERSIST, REHYDRATE } from 'redux-persist';
import { createStateSyncMiddleware } from 'redux-state-sync';

import { rootReducer } from './rootReducer';

export const getReducerStore = () =>
  configureStore({
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

export type RootState = ReturnType<
  ReturnType<typeof getReducerStore>['getState']
>;

export type AppDispatch = ReturnType<typeof getReducerStore>['dispatch'];

type DispatchFunc = () => AppDispatch;

export const useAppDispatch: DispatchFunc = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
