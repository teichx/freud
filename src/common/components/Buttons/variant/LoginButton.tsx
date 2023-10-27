import { Button, Icon, forwardRef } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import { FiLogIn } from 'react-icons/fi';

import { useLoader } from '~/core/services';
import { useScopedI18n } from '~/i18n/client';

import { VariantButtonProps } from '../types';

export const LoginButton = forwardRef<VariantButtonProps, 'button'>(
  ({ text, children, loaderKeys = ['DEFAULT'], ...props }, ref) => {
    const t = useScopedI18n('components.buttons');
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
