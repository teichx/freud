import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers } from 'redux';
import {
  PERSIST,
  persistReducer,
  persistStore,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  createStateSyncMiddleware,
  initMessageListener,
} from 'redux-state-sync';

import { AuthReducer, AUTH_KEY } from '~/core/services/Auth';
import { LOADER_KEY, LoaderReducer } from '~/core/services/Loader';

const rootReducer = combineReducers({
  [AUTH_KEY]: persistReducer({ storage, key: AUTH_KEY }, AuthReducer),
  [LOADER_KEY]: LoaderReducer,
});

export const ReducerStore = configureStore({
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

export const persister = persistStore(ReducerStore);

initMessageListener(ReducerStore);

export type RootState = ReturnType<typeof ReducerStore.getState>;

export type AppDispatch = typeof ReducerStore.dispatch;

type DispatchFunc = () => AppDispatch;

export const useAppDispatch: DispatchFunc = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
