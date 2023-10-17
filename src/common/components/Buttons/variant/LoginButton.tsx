import { Button, Icon, forwardRef } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import { useTranslation } from 'react-i18next';
import { FiLogIn } from 'react-icons/fi';

import { useLoader } from '~/core/services';

import { VariantButtonProps } from '../types';

export const LoginButton = forwardRef<VariantButtonProps, 'button'>(
  ({ text, children, loaderKeys = ['DEFAULT'], ...props }, ref) => {
    const { t } = useTranslation('common', {
      keyPrefix: 'components.buttons',
    });
    const { isLoading } = useLoader(loaderKeys[0], ...loaderKeys);

    return (
      <Button
        isLoading={isLoading}
        leftIcon={<Icon as={FiLogIn} />}
        {...props}
        onClick={() => signIn('google')}
        ref={ref}
      >
        {text || children || t('login')}
      </Button>
    );
  }
);
