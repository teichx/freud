import { Box, Text, Heading } from '@chakra-ui/react';

import { Buttons } from '~/common/components';
import { useScopedI18n } from '~/i18n/client';

export const SignIn = () => {
  const t = useScopedI18n('translations.auth.signIn');

  return (
    <Box>
      <Box>
        <Heading variant='h2' fontSize='3xl' textAlign='center' mb='5'>
          {t('content.title')}
        </Heading>

        <Text>{t('content.paragraphs.0')}</Text>
        <Text mt='2'>{t('content.paragraphs.1')}</Text>
      </Box>

      <Box textAlign='center'>
        <Buttons.LoginOrAccess
          mt='8'
          color='white'
          bgColor='book.desertSun.500'
          _hover={{ bgColor: 'book.desertSun.600' }}
        />
      </Box>
    </Box>
  );
};
