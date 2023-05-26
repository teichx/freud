import { FC } from 'react';

import { Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { FiSave } from 'react-icons/fi';

import { useLoader } from '~/core/services';

import { VariantButtonProps } from '../types';

export const SaveButton: FC<VariantButtonProps> = ({
  text,
  children,
  ...props
}) => {
  const { t } = useTranslation();
  const { isLoading } = useLoader();

  return (
    <Button
      type='submit'
      color='white'
      isLoading={isLoading}
      leftIcon={<FiSave />}
      colorScheme='book.desertSun'
      {...props}
    >
      {text || children || t('words.save')}
    </Button>
  );
};
