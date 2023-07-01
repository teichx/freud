import { FC } from 'react';

import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import { VariantButtonProps } from '../types';

export const BackButton: FC<VariantButtonProps> = ({
  text,
  children,
  ...props
}) => {
  const { back } = useRouter();
  const { t } = useTranslation();

  return (
    <Button onClick={back} variant='outline' {...props}>
      {text || children || t('words.back')}
    </Button>
  );
};
