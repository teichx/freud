import { Button, Icon, forwardRef } from '@chakra-ui/react';
import { SignOutParams, signOut } from 'next-auth/react';
import { FiLogOut } from 'react-icons/fi';

import { useLoader } from '~/core/services';
import { useScopedI18n } from '~/i18n/client';

import { VariantButtonProps } from '../types';

export const LogoutButton = forwardRef<
  VariantButtonProps & { signOut?: SignOutParams },
  'button'
>(
  (
    {
      text,
      children,
      loaderKeys = ['DEFAULT'],
      signOut: signOutParams,
      ...props
    },
    ref
  ) => {
    const t = useScopedI18n('common.components.buttons');
    const { isLoading } = useLoader(loaderKeys[0], ...loaderKeys);

    return (
      <Button
        isLoading={isLoading}
        leftIcon={<Icon as={FiLogOut} />}
        {...props}
        onClick={() =>
          signOut(
            signOutParams || {
              redirect: true,
              callbackUrl: '/',
            }
          )
        }
        ref={ref}
      >
        {text || children || t('logout')}
      </Button>
    );
  }
);
