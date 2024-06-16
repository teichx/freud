import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';

import {
  BaseSidebar,
  SidebarButton,
} from '~/app/[lang]/core/_sections/BaseSidebar';
import { useScopedI18n } from '~/i18n/client';

import { useSidebar } from '../../_hooks';

export const Sidebar = () => {
  const { items } = useSidebar();
  const t = useScopedI18n('translations.pages.patient.form.sidebar');

  return (
    <BaseSidebar>
      <Box pt='5'>
        <Heading variant='h2' fontSize='2xl' fontWeight='semibold' mb='2'>
          {t('title')}
        </Heading>

        <Text
          fontSize='md'
          lineHeight='1.25'
          color='gray.600'
          _dark={{ color: 'gray.300' }}
        >
          {t('description')}
        </Text>
      </Box>

      <Stack w='100%' rowGap='1' mt='7'>
        {items.map((x) => (
          <Stack w='100%' key={x.label} rowGap='1'>
            <SidebarButton
              as={Link}
              href={x.href}
              key={x.label}
              label={x.label}
              leftIcon={<x.Icon />}
              aria-selected={x.isActive}
              aria-disabled={x.isDisabled}
            />

            {x.items?.length && (
              <Stack w='100%' rowGap='1' pl='6'>
                {x.items.map((y) => (
                  <SidebarButton
                    as={Link}
                    href={y.href}
                    key={y.label}
                    label={y.label}
                    aria-selected={y.isActive}
                    aria-disabled={y.isDisabled}
                  />
                ))}
              </Stack>
            )}
          </Stack>
        ))}
      </Stack>
    </BaseSidebar>
  );
};
