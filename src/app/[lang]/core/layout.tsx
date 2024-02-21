'use client';
import { FC, PropsWithChildren, useEffect, useState } from 'react';

import { Box } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';

import { Header } from '~/core/sections/Header';

import { AuthRefresh } from './auth/refresh';

const AppPage: FC<PropsWithChildren> = ({ children }) => {
  const [wasVisible, setWasVisible] = useState(false);
  const { status } = useSession();

  useEffect(() => {
    if (status !== 'authenticated') return;
    setWasVisible(true);
  }, [status]);

  return (
    <Box>
      {wasVisible && (
        <Box>
          {status === 'authenticated' && <Header />}

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
      )}
      {status === 'unauthenticated' && <AuthRefresh isRefresh={wasVisible} />}
    </Box>
  );
};

export default AppPage;
