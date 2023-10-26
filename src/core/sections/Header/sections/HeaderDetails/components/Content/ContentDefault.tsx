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
import { signOut, useSession } from 'next-auth/react';
import {
  FiChevronRight,
  FiLogOut,
  FiMoon,
  FiSettings,
  FiSun,
} from 'react-icons/fi';
import { IoLanguage } from 'react-icons/io5';

import { Avatar } from '~/common/components/Avatar';
import { Routes } from '~/core/constants';
import { useCurrentLocale, useScopedI18n } from '~/i18n/client';

import { HeaderButton } from '../../../../components/HeaderButton';
import { HeaderDetailsContentProps } from './types';

const IMAGE_SIZE = 48;

export const ContentDefault: FC<HeaderDetailsContentProps> = ({
  toContent,
}) => {
  const locale = useCurrentLocale();
  const t = useScopedI18n('translations.header.details.default');
  const tLanguage = useScopedI18n('translations.header.details.language');
  const tWords = useScopedI18n('translations.words');
  const { data } = useSession({ required: true });
  const { user = {} } = data || { user: {} };
  const name = user.name || '';
  const image = user.image || '';
  const email = user.email || '';

  const emailColor = useColorModeValue('blackAlpha.600', 'whiteAlpha.600');
  const AppearanceIcon = useColorModeValue(FiSun, FiMoon);
  const appearanceText = useColorModeValue('light', 'dark');

  return (
    <PopoverContent mx={4} mb={0}>
      <PopoverBody display='flex' justifyContent='flex-start'>
        <Box w={`${IMAGE_SIZE}px`} mr='4'>
          <Avatar alt={name} src={image} w={IMAGE_SIZE} h={IMAGE_SIZE} />
        </Box>

        <Box>
          <Text fontSize='md'>{name}</Text>
          <Text fontSize='xs' color={emailColor}>
            {email}
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
          {t('appearance', { appearance: tWords(appearanceText) })}
        </HeaderButton>

        <HeaderButton
          leftIcon={<Icon as={IoLanguage} />}
          rightIcon={<Icon as={FiChevronRight} />}
          onClick={() => toContent('language')}
        >
          {t('language', { language: tLanguage(locale) })}
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
        <HeaderButton
          leftIcon={<Icon as={FiLogOut} />}
          onClick={() => signOut()}
        >
          {t('out')}
        </HeaderButton>
      </PopoverBody>
    </PopoverContent>
  );
};
