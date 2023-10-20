'use client';
import { useCallback } from 'react';

import { useAuthResultProps } from './types';

export const useAuth = (): useAuthResultProps => {
  const authenticateFetch = useCallback<
    useAuthResultProps['authenticateFetch']
  >(
    (input, init) =>
      fetch(input, {
        ...(init || {}),
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          ...(init?.headers || {}),
        },
      })
        .then((x) => (x.ok ? x : Promise.reject(x)))
        .catch((x) => {
          if (init?.body) {
            try {
              localStorage.setItem('LAST_SAVE', `${init.body}`);
            } catch (error) {
              console.log({ body: init.body });
            }
          }

          return Promise.reject(x);
        }),
    []
  );

  return {
    authenticateFetch,
  };
};
