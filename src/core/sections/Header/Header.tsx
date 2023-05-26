import { Box, ButtonGroup, Flex, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import { Logo } from '~/common/components/Logo';
import { Routes } from '~/core/constants';

import { HeaderDetails } from './sections/HeaderDetails';
import { HeaderButton } from './styles';

const MENU_ITEMS = [
  {
    path: Routes.Core.Dashboard.Default,
    label: 'dashboard',
  },
  {
    path: Routes.Core.Patient.List,
    label: 'patient',
  },
] as const;

export const Header = () => {
  const { pathname } = useRouter();
  const { t } = useTranslation(undefined, {
    keyPrefix: 'header.label',
  });

  return (
    <Box w='100%'>
      <HStack w='100%' py='2' px='8' spacing={4} bg='book.darkBlue.100'>
        <HStack w='50%' alignItems='center'>
          <Logo mr={4} color='book.desertSun.100' size='medium' />

          <ButtonGroup variant='unstyled' spacing='4' color='white'>
            {MENU_ITEMS.map(({ path, label }) => (
              <HeaderButton
                key={path}
                href={path}
                as={Link}
                selected={pathname === path}
              >
                {t(label)}
              </HeaderButton>
            ))}
          </ButtonGroup>
        </HStack>

        <Flex w='50%' justifyContent='flex-end' alignItems='center'>
          <HeaderDetails />
        </Flex>
      </HStack>
    </Box>
  );
};
