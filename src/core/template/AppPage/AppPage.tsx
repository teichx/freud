import { FC, PropsWithChildren, useEffect } from 'react';

import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { Routes } from '~/core/constants';
import { Header } from '~/core/sections/Header';
import { useAuth } from '~/core/services';

export const AppPage: FC<PropsWithChildren> = ({ children }) => {
  const { isLogged } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLogged) return;

    router.push(Routes.Core.Login);
  }, [isLogged, router]);

  return isLogged ? (
    <Box>
      <Header />

      <Box
        px={{
          base: 4,
          md: 8,
        }}
        py='4'
      >
        {children}
      </Box>
    </Box>
  ) : null;
};
