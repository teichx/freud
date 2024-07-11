'use client';

import { useParams } from 'next/navigation';

import { InfiniteScroll } from '~/common/components/InfiniteScroll';
import { useScopedI18n } from '~/i18n/client';

import { PageDescription } from '../../_sections';
import { CaseReport } from './CaseReport';

export default function PatientCaseReport() {
  const { patientId: id } = useParams<{ patientId: string }>() || {
    patientId: '',
  };
  const t = useScopedI18n('translations.pages.patient.form.pages');

  return (
    <PageDescription title={t('caseReport.title')}>
      <InfiniteScroll
        RenderItem={CaseReport}
        url={`/api/patient/v2/${id}/case-report/list`}
      />
    </PageDescription>
  );
}
