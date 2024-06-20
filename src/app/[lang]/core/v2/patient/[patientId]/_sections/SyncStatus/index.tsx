import { Box, Button, HStack, Text } from '@chakra-ui/react';
import {
  IoCloudDoneSharp,
  IoCloudUpload,
  IoCloudOffline,
} from 'react-icons/io5';
import { LuHistory } from 'react-icons/lu';

import { TooltipComponent } from '~/common/components';
import { useScopedI18n } from '~/i18n/client';

const IconMap = {
  online: IoCloudDoneSharp,
  loading: IoCloudUpload,
  offline: IoCloudOffline,
};

export const SyncStatus = () => {
  const t = useScopedI18n('translations.pages.patient.form.syncStatus');
  const lastUpdatedAt = new Date();
  const status: 'online' | 'loading' | 'offline' = 'online';
  const Icon = IconMap[status];

  return (
    <Box w='100%' display='flex' justifyContent='flex-end' position='relative'>
      <HStack my='4' alignItems='center'>
        <Box>
          <Button aria-label='history' leftIcon={<LuHistory />} size='sm'>
            {t('history')}
          </Button>
        </Box>

        <TooltipComponent label={t('lastSync')}>
          <HStack>
            <Icon />

            <Text>{lastUpdatedAt.toLocaleString()}</Text>
          </HStack>
        </TooltipComponent>
      </HStack>
    </Box>
  );
};
