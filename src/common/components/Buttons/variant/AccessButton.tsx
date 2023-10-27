import { forwardRef } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';

import { Routes } from '~/core/constants';
import { useLoader } from '~/core/services';
import { useScopedI18n } from '~/i18n/client';

import { Avatar } from '../../Avatar';
import { LinkButtonProps } from '../types';
import { LinkButton } from './LinkButton';

export const AccessButton = forwardRef<
  Omit<LinkButtonProps, 'href'> & { href?: LinkButtonProps['href'] },
  'button'
>(({ text, children, loaderKeys = ['DEFAULT'], href, ...props }, ref) => {
  const t = useScopedI18n('components.buttons');
  const { isLoading } = useLoader(loaderKeys[0], ...loaderKeys);
  const { data: session } = useSession();

  return (
    <LinkButton
      isLoading={isLoading}
      leftIcon={
        session?.user?.image ? (
          <Avatar
            alt={session.user?.name || ''}
            src={session.user.image}
            w={20}
            h={20}
          />
        ) : undefined
      }
      href={href || Routes.Core.Patient.List}
      {...props}
      ref={ref}
    >
      {text || children || t('access', { name: session?.user?.name })}
    </LinkButton>
  );
});
