import { combineReducers } from 'redux';

import { LOADER_KEY, LoaderReducer } from '~/core/services/Loader';
import {
  SOFT_REFRESH_KEY,
  SoftRefreshReducer,
} from '~/core/services/SoftRefresh';

export const rootReducer = combineReducers({
  [LOADER_KEY]: LoaderReducer,
  [SOFT_REFRESH_KEY]: SoftRefreshReducer,
});
