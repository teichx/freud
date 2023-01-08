import { useContext } from 'react';

import { AuthContext } from './AuthContext';
import { useAuthResultProps } from './types';

export const useAuth = (): useAuthResultProps => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('Use auth out of context is not enabled');

  return context;
};
