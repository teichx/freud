import { forwardRef, Button } from '@chakra-ui/react';

import { useScopedI18n } from '~/i18n/client';

import { VariantButtonProps } from '../types';

export const CancelButton = forwardRef<VariantButtonProps, 'button'>(
  ({ text, children, ...props }, ref) => {
    const t = useScopedI18n('components.buttons');

    return (
      <Button variant='outline' {...props} ref={ref}>
        {text || children || t('cancel')}
      </Button>
    );
  }
);
