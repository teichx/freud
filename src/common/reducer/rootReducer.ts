import { combineReducers } from 'redux';

import { LOADER_KEY, LoaderReducer } from '~/core/services/Loader';

export const rootReducer = combineReducers({
  [LOADER_KEY]: LoaderReducer,
});
