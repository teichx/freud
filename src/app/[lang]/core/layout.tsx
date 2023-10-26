'use client';
import { FC, PropsWithChildren, useEffect } from 'react';

import { Box } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { Routes } from '~/core/constants';
import { Header } from '~/core/sections/Header';

const AppPage: FC<PropsWithChildren> = ({ children }) => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== 'unauthenticated') return;

    router.push(Routes.Core.Login);
  }, [status, router]);

  return status === 'authenticated' ? (
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

export default AppPage;
