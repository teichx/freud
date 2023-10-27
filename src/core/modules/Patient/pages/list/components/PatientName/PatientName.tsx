import { FC } from 'react';

import { Box, Text } from '@chakra-ui/react';

import { TextHighlight } from '~/common/components/TextHighlight';
import { TooltipComponent } from '~/common/components/TooltipComponent';
import { useQueryFilterByName } from '~/common/query';
import { parseToHighlight } from '~/core/modules/Patient/api/parseSearchTerm';
import { useScopedI18n } from '~/i18n/client';

import { PatientNameProps } from './types';

export const PatientName: FC<PatientNameProps> = ({ text, isArchived }) => {
  const { queryFilter } = useQueryFilterByName('patientName');
  const t = useScopedI18n('translations.pages.patient.list.cell');

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
          <TextHighlight
            query={queryFilter}
            styles={{ bg: 'book.desertSun.500' }}
            transformFunction={parseToHighlight}
          >
            {text || ''}
          </TextHighlight>
        </Text>
      </TooltipComponent>
    </Box>
  );
};
