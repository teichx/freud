import { FC } from 'react';

import { Box, Icon } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import { useTranslation } from 'react-i18next';
import { RxAvatar } from 'react-icons/rx';

import { LinkButton } from '../Buttons';
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
      <LinkButton
        text={t('login')}
        href='#'
        size={SIZE_MAPPING[size]}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          signIn('google');
        }}
        borderRadius={RADIUS_MAPPING[radius]}
        leftIcon={<Icon as={RxAvatar} />}
      />
    </Box>
  );
};
