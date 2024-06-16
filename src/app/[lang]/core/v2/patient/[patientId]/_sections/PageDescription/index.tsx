import { Box, Heading, Text, Divider } from '@chakra-ui/react';

import { PageDescriptionProps } from './types';

export const PageDescription = ({
  title,
  description,
  children,
}: PageDescriptionProps) => (
  <Box>
    <Box>
      {title && (
        <Heading variant='h2' fontSize='2xl' fontWeight='semibold' mb='2'>
          {title}
        </Heading>
      )}

      {description && (
        <Text
          fontSize='md'
          lineHeight='1.25'
          color='gray.600'
          _dark={{ color: 'gray.300' }}
        >
          {description}
        </Text>
      )}

      {(title || description) && <Divider mb='3' mt='3' />}
    </Box>

    {children}
  </Box>
);
