import { FC } from 'react';

import { Box, Button, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { RxAvatar } from 'react-icons/rx';

import { Routes } from '~/constants/Routes';

import {
  ButtonRadiusMappingProps,
  ButtonSizeMappingProps,
  GoogleLoginProps,
} from './types';

const SIZE_MAPPING: ButtonSizeMappingProps = {
  small: 'sm',
  medium: 'md',
  large: 'lg',
};

const RADIUS_MAPPING: ButtonRadiusMappingProps = {
  small: 'sm',
  medium: 'base',
  large: 'full',
};

export const GoogleLogin: FC<GoogleLoginProps> = ({
  size = 'medium',
  radius = 'medium',
}) => {
  const { t } = useTranslation();

  return (
    <Box>
      <Button
        as={Link}
        href={Routes.Core.Login}
        size={SIZE_MAPPING[size]}
        borderRadius={RADIUS_MAPPING[radius]}
        leftIcon={<Icon as={RxAvatar} />}
      >
        {t('login')}
      </Button>
    </Box>
  );
};
