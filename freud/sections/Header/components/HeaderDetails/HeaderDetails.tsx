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
} from '@chakra-ui/react';
import Link from 'next/link';

import { Avatar } from '~/components/Avatar';
import { useAuth } from '~/services/Auth';

const ptBR = {
  google_drive: 'Google drive',
  out: 'Sair',
  out_tooltip: 'Sair da conta',
  configuration: 'Configuração',
} as const;

const IMAGE_SIZE = 48;

export const HeaderDetails = () => {
  const { picture, email, name, logout } = useAuth();

  return (
    <Popover trigger='hover'>
      <PopoverTrigger>
        <Avatar
          alt={name}
          src={picture}
          w={IMAGE_SIZE}
          h={IMAGE_SIZE}
          boxShadow='0 0 4px 0px #777'
        />
      </PopoverTrigger>

      <PopoverContent m={4}>
        <PopoverArrow />

        <PopoverBody>
          <Text fontSize='md'>
            <strong>{name}</strong>
          </Text>
          <Text fontSize='xs' color='blackAlpha.600'>
            {email}
          </Text>
          <Text fontSize='md'>
            <i>{ptBR.google_drive}</i>
          </Text>
        </PopoverBody>

        <PopoverFooter display='flex' justifyContent='space-between'>
          <Tooltip label={ptBR.configuration}>
            <Link href='/configuration'>
              <IconButton
                size='sm'
                aria-label='settings'
                icon={<SettingsIcon />}
              />
            </Link>
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