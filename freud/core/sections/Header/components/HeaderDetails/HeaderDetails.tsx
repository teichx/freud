import { SettingsIcon } from '@chakra-ui/icons';
import {
  Button,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverTrigger,
  Text,
  Tooltip,
  useColorMode,
} from '@chakra-ui/react';
import Link from 'next/link';

import { Avatar } from '~/components/Avatar';
import { Routes } from '~/constants/Routes';
import { useAuth } from '~/core/services/Auth';

const ptBR = {
  google_drive: 'Google drive',
  out: 'Sair',
  out_tooltip: 'Sair da conta',
  configuration: 'Configuração',
} as const;

const IMAGE_SIZE = 40;

export const HeaderDetails = () => {
  const { picture, email, name, logout } = useAuth();
  const { colorMode } = useColorMode();

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar
          alt={name}
          as={Button}
          src={picture}
          w={IMAGE_SIZE}
          h={IMAGE_SIZE}
        />
      </PopoverTrigger>

      <PopoverContent m={4}>
        <PopoverArrow />

        <PopoverBody>
          <Text fontSize='md'>
            <strong>{name}</strong>
          </Text>
          <Text
            fontSize='xs'
            color={colorMode === 'dark' ? 'whiteAlpha.600' : 'blackAlpha.600'}
          >
            {email}
          </Text>
          <Text fontSize='md'>
            <i>{ptBR.google_drive}</i>
          </Text>
        </PopoverBody>

        <PopoverFooter display='flex' justifyContent='space-between'>
          <Tooltip label={ptBR.configuration}>
            <IconButton
              size='sm'
              as={Link}
              aria-label='profile'
              icon={<SettingsIcon />}
              href={Routes.Core.Profile.Default}
            />
          </Tooltip>

          <Tooltip label={ptBR.out_tooltip}>
            <Button size='sm' onClick={logout}>
              {ptBR.out}
            </Button>
          </Tooltip>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};