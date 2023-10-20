import { forwardRef, Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { VariantButtonProps } from '../types';

export const BackButton = forwardRef<VariantButtonProps, 'button'>(
  ({ text, children, ...props }, ref) => {
    const route = useRouter();
    const { t } = useTranslation();

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
