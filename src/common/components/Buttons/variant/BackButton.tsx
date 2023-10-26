import { forwardRef, Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import { useScopedI18n } from '~/i18n/client';

import { VariantButtonProps } from '../types';

export const BackButton = forwardRef<VariantButtonProps, 'button'>(
  ({ text, children, ...props }, ref) => {
    const route = useRouter();
    const t = useScopedI18n('translations');

    return (
      <Button
        onClick={() => route.back()}
        variant='outline'
        {...props}
        ref={ref}
      >
        {text || children || t('words.back')}
      </Button>
    );
  }
);
