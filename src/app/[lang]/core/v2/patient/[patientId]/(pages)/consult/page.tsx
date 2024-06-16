'use client';
import { Flex } from '@chakra-ui/react';

import { FormText } from '~/common/components';
import { useScopedI18n } from '~/i18n/client';

import { PageDescription } from '../../_sections';
import { FIRST_CONSULT_FIELDS } from './const';

export default function PatientConsult() {
  const t = useScopedI18n('translations.pages.patient.form.pages.firstConsult');

  return (
    <PageDescription title={t('title')}>
      <Flex flexDirection='column'>
        {FIRST_CONSULT_FIELDS.map((x) => (
          <FormText
            key={x}
            isTextArea
            inputProps={{ minH: '120px' }}
            label={t(`fields.${x}`)}
            name={`firstConsult.${x}`}
          />
        ))}
      </Flex>
    </PageDescription>
  );
}
