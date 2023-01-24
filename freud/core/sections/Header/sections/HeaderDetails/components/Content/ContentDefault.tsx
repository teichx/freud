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

const ptBR = {
  google_drive: 'Google drive',
  out: 'Sair',
  out_tooltip: 'Sair da conta',
  configuration: 'Configurações',
  appearance: {
    text: 'Aparência: ',
    dark: 'escuro',
    light: 'claro',
  },
  language: {
    text: 'Idioma: ',
    portuguese: 'Português',
  },
} as const;

const IMAGE_SIZE = 48;

export const ContentDefault: FC<HeaderDetailsContentProps> = ({
  toContent,
}) => {
  const { picture, email, name, logout } = useAuth();

  const emailColor = useColorModeValue('blackAlpha.600', 'whiteAlpha.600');
  const AppearanceIcon = useColorModeValue(FiSun, FiMoon);
  const appearanceText = useColorModeValue(
    ptBR.appearance.light,
    ptBR.appearance.dark
  );

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
            <i>{ptBR.google_drive}</i>
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
          {ptBR.appearance.text}
          {appearanceText}
        </HeaderButton>

        <HeaderButton
          leftIcon={<Icon as={IoLanguage} />}
          rightIcon={<Icon as={FiChevronRight} />}
          onClick={() => toContent('language')}
        >
          {ptBR.language.text}
          {ptBR.language.portuguese}
        </HeaderButton>
      </PopoverBody>

      <Divider />

      <PopoverBody px='0'>
        <HeaderButton
          leftIcon={<Icon as={FiSettings} />}
          href={Routes.Core.Profile.Default}
        >
          {ptBR.configuration}
        </HeaderButton>
      </PopoverBody>

      <Divider />

      <PopoverBody px='0'>
        <HeaderButton leftIcon={<Icon as={FiLogOut} />} onClick={logout}>
          {ptBR.out}
        </HeaderButton>
      </PopoverBody>
    </PopoverContent>
  );
};
