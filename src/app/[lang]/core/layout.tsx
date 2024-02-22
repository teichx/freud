'use client';
import { FC, PropsWithChildren, useEffect, useState } from 'react';

import { Box } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';

import { Header } from './_sections';
import { AuthRefresh } from './auth/refresh';

const AppPage: FC<PropsWithChildren> = ({ children }) => {
  const [wasVisible, setWasVisible] = useState(false);
  const { status } = useSession();

  useEffect(() => {
    if (status !== 'authenticated') return;
    setWasVisible(true);
  }, [status]);

  return (
    <Box h='100%' display='flex' flexDirection='column' overflow='hidden'>
      {status === 'authenticated' && <Header />}

      <Box h='100%' display='flex' flexDirection='column' overflow='auto'>
        {wasVisible && children}
      </Box>

      {status === 'unauthenticated' && <AuthRefresh isRefresh={wasVisible} />}
    </Box>
  );
};

export default AppPage;
