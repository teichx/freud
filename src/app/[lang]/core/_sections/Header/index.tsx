'use client';
import { Box, ButtonGroup, Flex, HStack } from '@chakra-ui/react';

import { Buttons } from '~/common/components/Buttons';
import { Logo } from '~/common/components/Logo';
import { ProjectRoutes } from '~/core/constants';

import { useHeader } from './hooks';
import { HeaderDetails } from './sections/HeaderDetails';

export const Header = () => {
  const { headersItems } = useHeader();

  return (
    <Box w='100%' position='relative' zIndex='banner'>
      <HStack w='100%' py='1' px='8' spacing={4} bg='book.darkBlue.500'>
        <HStack w='50%' alignItems='center'>
          <Buttons.Link
            mr={4}
            py='1'
            height='auto'
            color='white'
            variant='ghost'
            _hover={{
              bg: 'whiteAlpha.300',
            }}
            href={ProjectRoutes.Home}
          >
            <Logo size='small' />
          </Buttons.Link>

          <ButtonGroup variant='unstyled' spacing='4' color='white'>
            {headersItems.map(({ path, label, isSelected }) => (
              <Buttons.Link
                key={path}
                href={path}
                h='auto'
                fontSize='small'
                color={isSelected ? 'white' : 'whiteAlpha.800'}
                _hover={{
                  color: isSelected ? 'white' : 'whiteAlpha.900',
                }}
              >
                {label}
              </Buttons.Link>
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
