import { FC } from 'react';

import { Box, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { TooltipComponent } from '~/common/components/TooltipComponent';

import { PatientArchivedProps } from './types';

export const PatientArchived: FC<PatientArchivedProps> = ({
  text,
  isArchived,
}) => {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'pages.patient.list.cell',
  });

  return (
    <Box display='inline-block'>
      <TooltipComponent label={t('archived.tooltip')} isDisabled={!isArchived}>
        <Text
          aria-disabled={isArchived}
          _disabled={{
            color: 'gray.500',
            _dark: {
              color: 'gray.400',
            },
          }}
        >
          {text || ''}
        </Text>
      </TooltipComponent>
    </Box>
  );
};
