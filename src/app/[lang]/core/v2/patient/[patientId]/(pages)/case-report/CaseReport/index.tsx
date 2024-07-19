import { Box, Flex, Stack } from '@chakra-ui/react';

import { FormHidden, FormText } from '~/common/components';
import { useScopedI18n } from '~/i18n/client';

import { CaseReportProps } from './types';

export const CaseReport = ({ id, content, reportingDate }: CaseReportProps) => {
  const t = useScopedI18n('translations.pages.patient.form.pages.caseReport');

  return (
    <Stack
      key={id}
      w='100%'
      flexGrow={1}
      flexDirection='row'
      alignItems={['stretch', 'stretch', 'flex-start']}
      columnGap='4'
      flexDir={['column', 'column', 'row']}
    >
      <Box w={180} position='relative' mb={['2', '2', 0]}>
        <FormHidden name={`${id}.id`} defaultValue={id} />

        <FormText
          name={`${id}.reportingDate`}
          label={t('reportingDate')}
          unForceHelperText
          inputProps={{
            type: 'date',
            defaultValue: reportingDate,
          }}
        />
      </Box>

      <Flex shadow='xl' flexGrow={1} borderRadius='lg'>
        <FormText
          name={`${id}.content`}
          label={t('content')}
          isTextArea
          unForceHelperText
          inputProps={{
            placeholder: t('contentPlaceholder'),
            defaultValue: content,
          }}
        />
      </Flex>
    </Stack>
  );
};
