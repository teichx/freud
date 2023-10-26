import { Box, Container, Icon, IconButton, Text, Link } from '@chakra-ui/react';
import { BsGithub } from 'react-icons/bs';
import { GiBrazil } from 'react-icons/gi';

import { TooltipComponent } from '~/common/components/TooltipComponent';
import { useScopedI18n } from '~/i18n/client';

import { StyledHStack } from './style';

export const Footer = () => {
  const t = useScopedI18n('project');

  return (
    <Box
      w='100%'
      sx={{
        bg: 'book.darkBlue.500',
        color: 'gray.200',
        _dark: {
          bg: 'book.desertSun.900',
        },
      }}
    >
      <Container w='100%' maxW='container.xl' fontSize='sm'>
        <StyledHStack justifyContent='center'>
          <Text m='0'>{t('author.createdOn')}</Text>

          <TooltipComponent label={t('author.brazil')}>
            <Box
              display='flex'
              alignItems='center'
              sx={{
                color: 'book.desertSun.500',
                _dark: {
                  color: 'white',
                },
              }}
            >
              <Icon as={GiBrazil} />
            </Box>
          </TooltipComponent>

          <Text>{t('author.by')}</Text>

          <Link color='white' target='_blank' href='https://github.com/teichx'>
            {t('author.teichx')}
          </Link>

          <IconButton
            as={Link}
            size='xs'
            rounded='full'
            target='_blank'
            sx={{
              color: 'black',
              _dark: {
                color: 'white',
              },
            }}
            aria-label='https://github.com/teichx/freud'
            href='https://github.com/teichx/freud'
            icon={<Icon as={BsGithub} fontSize='md' />}
          />
        </StyledHStack>
      </Container>
    </Box>
  );
};
