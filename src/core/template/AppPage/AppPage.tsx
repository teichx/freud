import { FC, PropsWithChildren, useEffect } from 'react';

import { Box } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import { Meta } from '~/common/components/Meta';
import { Routes } from '~/core/constants';
import { Header } from '~/core/sections/Header';

import { AppPageProps } from './types';

export const AppPage: FC<PropsWithChildren<AppPageProps>> = ({
  titleKey,
  children,
}) => {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'pageTitle',
  });
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== 'unauthenticated') return;

    router.push(Routes.Core.Login);
  }, [status, router]);

  return status === 'authenticated' ? (
    <Box>
      <Header />
      {titleKey && <Meta.Title title={t(titleKey)} />}

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
