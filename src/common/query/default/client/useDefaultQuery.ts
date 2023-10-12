import { useRouter } from 'next/router';

import { splitPath } from '../../path';
import { UseDefaultQuery } from './types';

export const useDefaultQuery: UseDefaultQuery = () => {
  const router = useRouter();
  const { parameters } = splitPath(router);

  return {
    stringParameters: parameters.toString(),
  };
};
