import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import Image from 'next/image';

import { BackButton } from '~/common/components/Buttons/variant/BackButton';
import { getScopedI18n } from '~/i18n/server';

import { Footer, Header, ProjectSectionWrapper } from './_project/components';

const NotFound = async () => {
  const t = await getScopedI18n('project.notFound');

  return (
    <Box
      minH='100vh'
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
    >
      <Box mb='80px'>
        <Header />
      </Box>

      <ProjectSectionWrapper
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <SimpleGrid
          columns={{
            base: 1,
            lg: 2,
          }}
          columnGap='5%'
        >
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='space-evenly'
            textAlign={{
              base: 'center',
              lg: 'left',
            }}
          >
            <Box>
              <Heading as='h1' mb='2'>
                {t('title')}
              </Heading>
              <Heading as='h2' fontSize='3xl' mb='5'>
                {t('status')}
              </Heading>

              <Text>{t('text.0')}</Text>
              <Text>{t('text.1')}</Text>

              <BackButton
                mt='3'
                size='sm'
                color='white'
                bgColor='book.desertSun.500'
                _hover={{ bgColor: 'book.desertSun.600' }}
              />
            </Box>

            <Box />
          </Box>

          <Box
            display='flex'
            justifyContent='flex-end'
            maxW={450}
            ml={{ base: 'auto', lg: 'auto' }}
            mr={{ base: 'auto', lg: '0' }}
            mt={{ base: '5', lg: '0' }}
          >
            <Box borderRadius='lg' overflow='hidden' position='relative'>
              <Image
                width={450}
                height={675}
                quality={75}
                alt={t('alt')}
                src='/static/project/not-found/pexels-cottonbro-studio-4101144.jpg'
              />
            </Box>
          </Box>
        </SimpleGrid>
      </ProjectSectionWrapper>

      <Footer />
    </Box>
  );
};

export default NotFound;
