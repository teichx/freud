import { FC, PropsWithChildren, useEffect } from 'react';

import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { Routes } from '~/constants/Routes';
import { useAuth } from '~/services/Auth';

import { Header } from '../../../sections/Header';

export const AppPage: FC<PropsWithChildren> = ({ children }) => {
  const { isLogged } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLogged) return;

    router.push(Routes.App.Login);
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
