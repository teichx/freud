import { forwardRef, Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { VariantButtonProps } from '../types';

export const CancelButton = forwardRef<VariantButtonProps, 'button'>(
  ({ text, children, ...props }, ref) => {
    const { t } = useTranslation();

    return (
      <Button variant='outline' {...props} ref={ref}>
        {text || children || t('words.cancel')}
      </Button>
    );
  }
);
