import { LoaderProps, LoaderType } from './types';
import { LOADER_VARIANT } from './variant';

export const DEFAULT_LOADER = LOADER_VARIANT[0];

export const DEFAULT_LOADER_LIST: LoaderType[] = [DEFAULT_LOADER];

export const LOADER_INITIAL_STATE: LoaderProps = {
  [DEFAULT_LOADER]: {
    isLoading: false,
  },
};

export const LOADER_KEY = 'loader';
