import { Box } from '@chakra-ui/react';
import {
  formatDistanceStrict,
  parseISO,
  startOfDay,
  startOfToday,
} from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Form } from 'react-final-form';

import { FormText } from '~/common/components';
import { useScopedI18n } from '~/i18n/client';

import { CaseReportProps } from './types';

export const CaseReport = (item: CaseReportProps) => {
  const t = useScopedI18n('translations.pages.patient.form.pages.caseReport');

  return (
    <Box w='100%' display='flex' flexGrow={1} key={item.id}>
      <Form<CaseReportProps> onSubmit={console.log} initialValues={item}>
        {({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Box
              w='100%'
              display='flex'
              flexDirection='row'
              alignItems='flex-start'
            >
              <input type='hidden' name='id' value={item.id} />

              <Box w={180} position='relative'>
                <FormText
                  name={'reportingDate'}
                  label={t('reportingDate')}
                  helperText={formatDistanceStrict(
                    startOfDay(parseISO(values.reportingDate)),
                    startOfToday(),
                    {
                      addSuffix: true,
                      roundingMethod: 'floor',
                      locale: ptBR,
                    }
                  )}
                  inputProps={{
                    type: 'date',
                  }}
                />
              </Box>

              <Box
                ml={4}
                shadow='xl'
                flexGrow={1}
                display='flex'
                borderRadius='lg'
              >
                <FormText
                  name={'content'}
                  label={t('content')}
                  isTextArea
                  unForceHelperText
                  inputProps={{ placeholder: t('contentPlaceholder') }}
                />
              </Box>
            </Box>
          </form>
        )}
      </Form>
    </Box>
  );
};
