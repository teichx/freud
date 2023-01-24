import { FC } from 'react';

import {
  Box,
  Divider,
  Icon,
  PopoverBody,
  PopoverContent,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import {
  FiChevronRight,
  FiLogOut,
  FiMoon,
  FiSettings,
  FiSun,
} from 'react-icons/fi';
import { IoLanguage } from 'react-icons/io5';

import { Avatar } from '~/components/Avatar';
import { Routes } from '~/constants/Routes';
import { useAuth } from '~/core/services/Auth';

import { HeaderButton } from '../../../../components/HeaderButton';
import { HeaderDetailsContentProps } from './types';

const IMAGE_SIZE = 48;

export const ContentDefault: FC<HeaderDetailsContentProps> = ({
  toContent,
}) => {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'header.details.default',
  });
  const { picture, email, name, logout } = useAuth();

  const emailColor = useColorModeValue('blackAlpha.600', 'whiteAlpha.600');
  const AppearanceIcon = useColorModeValue(FiSun, FiMoon);
  const appearanceText = useColorModeValue('light', 'dark');

  return (
    <PopoverContent mx={4} mb={0}>
      <PopoverBody display='flex' justifyContent='flex-start'>
        <Box w={`${IMAGE_SIZE}px`} mr='4'>
          <Avatar alt={name} src={picture} w={IMAGE_SIZE} h={IMAGE_SIZE} />
        </Box>

        <Box>
          <Text fontSize='md'>{name}</Text>
          <Text fontSize='xs' color={emailColor}>
            {email}
          </Text>
          <Text fontSize='md'>
            <i>{t('google_drive')}</i>
          </Text>
        </Box>
      </PopoverBody>

      <Divider />

      <PopoverBody px='0'>
        <HeaderButton
          onClick={() => toContent('appearance')}
          leftIcon={<Icon as={AppearanceIcon} />}
          rightIcon={<Icon as={FiChevronRight} />}
        >
          {t('appearance', { appearance: appearanceText })}
        </HeaderButton>

        <HeaderButton
          leftIcon={<Icon as={IoLanguage} />}
          rightIcon={<Icon as={FiChevronRight} />}
          onClick={() => toContent('language')}
        >
          {t('language', { language: 'pt-BR' })}
        </HeaderButton>
      </PopoverBody>

      <Divider />

      <PopoverBody px='0'>
        <HeaderButton
          leftIcon={<Icon as={FiSettings} />}
          href={Routes.Core.Profile.Default}
        >
          {t('configuration')}
        </HeaderButton>
      </PopoverBody>

      <Divider />

      <PopoverBody px='0'>
        <HeaderButton leftIcon={<Icon as={FiLogOut} />} onClick={logout}>
          {t('out')}
        </HeaderButton>
      </PopoverBody>
    </PopoverContent>
  );
};
