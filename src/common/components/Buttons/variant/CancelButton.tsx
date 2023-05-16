import { FC } from 'react';

import { Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { VariantButtonProps } from '../types';

export const CancelButton: FC<VariantButtonProps> = ({ text, ...props }) => {
  const { t } = useTranslation();

  return (
    <Button variant='outline' {...props}>
      {text || t('words.cancel')}
    </Button>
  );
};
