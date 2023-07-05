import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { AuthReducer, AUTH_KEY } from '~/core/services/Auth';
import { LOADER_KEY, LoaderReducer } from '~/core/services/Loader';

export const rootReducer = combineReducers({
  [AUTH_KEY]: persistReducer({ storage, key: AUTH_KEY }, AuthReducer),
  [LOADER_KEY]: LoaderReducer,
});
