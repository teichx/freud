'use client';
import {
  Box,
  ButtonGroup,
  Flex,
  TabList,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import { useSession } from 'next-auth/react';

import { Buttons } from '~/common/components/Buttons';
import { FormComponent } from '~/common/components/Form';
import { Meta } from '~/common/components/Meta';
import { TooltipComponent } from '~/common/components/TooltipComponent';
import { useScopedI18n } from '~/i18n/client';

import { Sidebar } from './_base/components/Sidebar';

const Profile = () => {
  const t = useScopedI18n('translations.pages.profile');
  const { data } = useSession({ required: true });

  return (
    <Box minH='100%'>
      <Meta.Title title={t('title')} />

      <FormComponent initialValues={data} onSubmit={console.log}>
        <Flex
          columnGap='6'
          display='flex'
          flexWrap='wrap'
          alignItems='stretch'
          minH='calc(100vh - 96px)'
        >
          <Box
            sx={{
              w: {
                base: '100%',
                lg: '320px',
              },
              mb: {
                base: '6',
                lg: 0,
              },
              display: 'flex',
              alignItems: 'stretch',
            }}
          >
            <Sidebar />
          </Box>

          <Box flexGrow='1'>
            <Tabs
              minH='100%'
              display='flex'
              variant='enclosed'
              flexDirection='column'
            >
              <Flex w='100%'>
                <TabList flexGrow='1' />

                <ButtonGroup
                  spacing='4'
                  sx={{
                    py: '3',
                    px: '4',
                    borderTopLeftRadius: '4',
                    borderTopRightRadius: '4',
                    borderWidth: '1px 1px 0 1px',
                    borderStyle: 'solid',
                  }}
                >
                  <Buttons.Back variant='solid' />

                  <TooltipComponent label={t('unavailableResource')}>
                    <Buttons.Save isDisabled />
                  </TooltipComponent>
                </ButtonGroup>
              </Flex>

              <TabPanels
                sx={{
                  h: '100%',
                  flexGrow: 1,
                  borderLeftWidth: 1,
                  borderRightWidth: 1,
                  borderBottomWidth: 1,
                  borderStyle: 'solid',
                  borderBottomRadius: 'md',
                }}
              />
            </Tabs>
          </Box>
        </Flex>
      </FormComponent>
    </Box>
  );
};

export default Profile;
