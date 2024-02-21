import { useEffect, useState } from 'react';

import { Box, Text, Heading, Icon } from '@chakra-ui/react';
import { FiLogIn } from 'react-icons/fi';

import { Buttons } from '~/common/components';
import { useScopedI18n } from '~/i18n/client';

export const SignInAgain = () => {
  const t = useScopedI18n('translations.auth.signInAgain');
  const [urlLogin, setUrlLogin] = useState('');

  useEffect(() => {
    fetch('/api/auth/csrf')
      .then((x) => x.json())
      .then((x) =>
        fetch('/api/auth/signin/google', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `csrfToken=${x.csrfToken}&callbackUrl=${encodeURIComponent(
            window.location.href
          )}&json=true`,
        })
      )
      .then((x) => x.json())
      .then((x) => {
        setUrlLogin(x.url);
      });
  }, []);

  return (
    <Box>
      <Box>
        <Heading variant='h2' fontSize='3xl' textAlign='center' mb='5'>
          {t('content.title')}
        </Heading>

        <Text>{t('content.paragraphs.0')}</Text>
        <Text>{t('content.paragraphs.1')}</Text>
      </Box>

      <Box textAlign='center'>
        <Buttons.Link
          mt='8'
          leftIcon={<Icon as={FiLogIn} />}
          isLoading={!urlLogin}
          href={urlLogin || '#'}
          color='white'
          bgColor='book.desertSun.500'
          _hover={{ bgColor: 'book.desertSun.600' }}
          variant='solid'
          text={t('button')}
          target='_blank'
        />
      </Box>
    </Box>
  );
};
