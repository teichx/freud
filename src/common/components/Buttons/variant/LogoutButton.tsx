import { Button, Icon, forwardRef } from '@chakra-ui/react';
import { SignOutParams, signOut } from 'next-auth/react';
import { useTranslation } from 'react-i18next';
import { FiLogOut } from 'react-icons/fi';

import { useLoader } from '~/core/services';

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
    const { t } = useTranslation('common', {
      keyPrefix: 'components.buttons',
    });
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
