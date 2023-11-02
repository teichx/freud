import { Box, Container, Divider, Heading } from '@chakra-ui/react';
import { setStaticParamsLocale } from 'next-international/server';
import Image from 'next/image';

import { LinkButton } from '~/common/components/Buttons/variant/LinkButton';
import { LoginOrAccessButton } from '~/common/components/Buttons/variant/LoginOrAccessButton';
import { LoginOrNull } from '~/common/components/Buttons/variant/LoginOrNull';
import { ProjectRoutes } from '~/core/constants';
import { getScopedI18n } from '~/i18n/server';

import { Footer, Header, ProjectSection } from './_project/components';

const Index = async ({ params: { lang } }: { params: { lang: string } }) => {
  setStaticParamsLocale(lang);
  const t = await getScopedI18n('project.home');

  return (
    <Box width='100%'>
      <Header />

      <Box
        sx={{
          w: '100%',
          position: 'relative',
        }}
      >
        <Image
          style={{
            objectFit: 'cover',
            objectPosition: 'top',
            transform: 'scaleX(-1)',
          }}
          sizes='(max-width: 1300px) 600px, (max-width: 1024px) 500px, 100vw'
          priority
          quality={75}
          fill
          alt={t('welcome.alt')}
          src='/static/project/home/pexels-cottonbro-studio-4098277.jpg'
        />
        <Box
          sx={{
            mt: '-80px',
            py: ['5%', '5%', '2.5%', '2.5%'],
          }}
        >
          <Container w='100%' maxW='container.xl'>
            <Box
              sx={{
                minH: '100vh',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box transform='translateY(-50%)' color='book.darkBlue.500'>
                <Heading as='h1'>{t('welcome.title')}</Heading>
                <Divider bgColor='book.desertSun.500' my='3' />

                <Heading as='h2' size='lg'>
                  {t('welcome.text.0')}
                </Heading>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>

      <ProjectSection
        title={[t('builtFor.title.0'), t('builtFor.title.1')]}
        paragraphs={[t('builtFor.text.0')]}
        textPosition='right'
        sx={{
          bg: 'blackAlpha.100',
          _dark: {
            bg: 'whiteAlpha.100',
          },
          pt: { base: '5%' },
          pb: { sm: 0 },
          mt: { sm: '5%', lg: '7.5%' },
          mb: { lg: '5%' },
        }}
        image={{
          src: '/static/project/home/pexels-polina-tankilevitch-5234582.jpg',
          alt: t('builtFor.alt'),
          sx: {
            w: { base: '110%', md: '50%', lg: '100%' },
            mx: { base: '-5', md: 'auto' },
            mt: { base: '5', lg: '-15%' },
            mb: { base: 0, lg: '-15%' },
          },
        }}
      />

      <ProjectSection
        title={t('price.title')}
        paragraphs={[
          t('price.text.0'),
          t('price.text.1'),
          t('price.text.2'),
          <Box key='divider' my='4'>
            <Divider key='divider' bgColor='book.desertSun.500' />
          </Box>,
          t('price.secondText.0'),
        ]}
        textPosition='left'
        image={{
          alt: t('price.alt'),
          src: '/static/project/home/pexels-cup-of-couple-6956772.jpg',
        }}
      />

      <ProjectSection
        title={t('howStart.title')}
        paragraphs={[
          t('howStart.text.0'),
          t('howStart.text.1'),
          <Box w='100%' mt='5' key='login'>
            <LoginOrNull
              bgColor='book.desertSun.500'
              color='white'
              _hover={{
                bgColor: 'book.desertSun.600',
              }}
            />
          </Box>,
        ]}
        textPosition='right'
        image={{
          src: '/static/project/home/pexels-mikhail-nilov-8653735.jpg',
          alt: t('howStart.alt'),
        }}
      />

      <ProjectSection
        title={t('privacy.title')}
        paragraphs={[
          t('privacy.text.0'),
          t('privacy.text.1'),
          <Box key='toPolicy' mt='3'>
            <LinkButton
              color='white'
              bgColor='book.desertSun.500'
              href={ProjectRoutes.Policies}
              _hover={{ bgColor: 'book.desertSun.600' }}
            >
              {t('privacy.cta')}
            </LinkButton>
          </Box>,
        ]}
        textPosition='left'
        image={{
          src: '/static/project/home/pexels-george-milton-7034717.jpg',
          alt: t('privacy.alt'),
        }}
      />

      <ProjectSection
        title={t('joinUs.title')}
        paragraphs={[
          t('joinUs.text.0'),
          <Divider key='divider' my='3' bgColor='book.royalBlue.500' />,
          t('joinUs.text.1'),
          <Box w='100%' mt='5' key='login'>
            <LoginOrAccessButton
              bgColor='book.royalBlue.500'
              color='white'
              _hover={{
                bgColor: 'book.royalBlue.600',
              }}
            />
          </Box>,
        ]}
        textPosition='right'
        image={{
          src: '/static/project/home/pexels-cottonbro-studio-4101183.jpg',
          alt: t('joinUs.alt'),
        }}
      />

      <Footer />
    </Box>
  );
};

export default Index;
