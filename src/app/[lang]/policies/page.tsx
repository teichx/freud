import { Box, Heading } from '@chakra-ui/react';
import { setStaticParamsLocale } from 'next-international/server';

import { BackButton } from '~/common/components/Buttons/variant/BackButton';
import { getScopedI18n } from '~/i18n/server';

import { Footer, Header } from '../_project/components';

const Policies = async ({ params: { lang } }: { params: { lang: string } }) => {
  setStaticParamsLocale(lang);
  const t = await getScopedI18n('project.policies');

  return (
    <Box width='100%'>
      <Header />

      <Box h='100vh' display='flex' alignItems='center' justifyContent='center'>
        <Box>
          <Box mb='3' mx='auto' textAlign='center'>
            <BackButton
              variant='solid'
              bgColor='book.desertSun.500'
              color='white'
              _hover={{ bgColor: 'book.desertSun.600' }}
            />
          </Box>

          <Heading fontSize='lg'>{t('inDevelopment')}</Heading>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Policies;
