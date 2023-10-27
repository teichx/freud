'use server';
import {
  Box,
  Container,
  Icon,
  IconButton,
  Text,
  HStack,
} from '@chakra-ui/react';
import { BsGithub } from 'react-icons/bs';
import { GiBrazil } from 'react-icons/gi';

import { LinkButton } from '~/common/components/Buttons/variant/LinkButton';
import { TooltipComponent } from '~/common/components/TooltipComponent';
import { getScopedI18n } from '~/i18n/server';

export const Footer = async () => {
  const t = await getScopedI18n('project');

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
        <HStack
          justifyContent='center'
          py='2'
          columnGap='1'
          sx={{
            '> *': {
              marginInlineStart: '0 !important',
            },
          }}
        >
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
              <Icon viewBox='0 0 14 14'>
                <GiBrazil />
              </Icon>
            </Box>
          </TooltipComponent>

          <Text>{t('author.by')}</Text>

          <LinkButton
            p='0'
            height='auto'
            color='inherit'
            variant='link'
            fontSize='inherit'
            fontWeight='inherit'
            linkProps={{
              target: '_blank',
            }}
            href='https://github.com/teichx'
          >
            {t('author.teichx')}
          </LinkButton>

          <IconButton
            size='xs'
            rounded='full'
            sx={{
              color: 'black',
              _dark: {
                color: 'white',
              },
            }}
            aria-label='https://github.com/teichx/freud'
            icon={
              <Icon viewBox='0 0 16 16' fontSize='md'>
                <BsGithub />
              </Icon>
            }
          />
        </HStack>
      </Container>
    </Box>
  );
};
