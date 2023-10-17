import { Box, ButtonGroup, Flex, HStack } from '@chakra-ui/react';
import Link from 'next/link';

import { Buttons } from '~/common/components/Buttons';
import { Logo } from '~/common/components/Logo';
import { ProjectRoutes } from '~/core/constants';

import { useHeader } from './hooks';
import { HeaderDetails } from './sections/HeaderDetails';
import { HeaderButton } from './styles';

export const Header = () => {
  const { headersItems } = useHeader();

  return (
    <Box w='100%' position='relative' zIndex='banner'>
      <HStack w='100%' py='2' px='8' spacing={4} bg='book.darkBlue.500'>
        <HStack w='50%' alignItems='center'>
          <Buttons.Link href={ProjectRoutes.Home} variant='unstyled'>
            <Logo mr={4} color='book.desertSun.500' size='medium' />
          </Buttons.Link>

          <ButtonGroup variant='unstyled' spacing='4' color='white'>
            {headersItems.map(({ path, label, isSelected }) => (
              <HeaderButton
                key={path}
                href={path}
                as={Link}
                selected={isSelected}
              >
                {label}
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
