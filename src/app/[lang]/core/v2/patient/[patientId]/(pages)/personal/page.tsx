'use client';
import { Box } from '@chakra-ui/react';

import { useScopedI18n } from '~/i18n/client';

import { PageDescription } from '../../_sections';

export default function PatientPersonal() {
  const t = useScopedI18n('translations.pages.patient.form.pages');

  return (
    <PageDescription title={t('personal.title')}>
      <Box />
    </PageDescription>
  );
}
