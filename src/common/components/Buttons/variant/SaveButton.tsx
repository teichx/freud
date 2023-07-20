import { forwardRef, Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { FiSave } from 'react-icons/fi';

import { useLoader } from '~/core/services';

import { VariantButtonProps } from '../types';

export const SaveButton = forwardRef<VariantButtonProps, 'button'>(
  ({ text, children, loaderKeys = ['DEFAULT'], ...props }, ref) => {
    const { t } = useTranslation();
    const { isLoading } = useLoader(loaderKeys[0], ...loaderKeys);

    return (
      <Button
        type='submit'
        color='white'
        isLoading={isLoading}
        leftIcon={<FiSave />}
        colorScheme='book.desertSun'
        {...props}
        ref={ref}
      >
        {text || children || t('words.save')}
      </Button>
    );
  }
);
