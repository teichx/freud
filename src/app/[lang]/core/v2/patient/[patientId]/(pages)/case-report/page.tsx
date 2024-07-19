'use client';

import { Divider, useBreakpointValue } from '@chakra-ui/react';
import { useParams } from 'next/navigation';
import { Form } from 'react-final-form';

import { InfiniteScroll } from '~/common/components/InfiniteScroll';
import { useScopedI18n } from '~/i18n/client';

import { PageDescription } from '../../_sections';
import { CaseReport } from './CaseReport';

export default function PatientCaseReport() {
  const { patientId: id } = useParams<{ patientId: string }>() || {
    patientId: '',
  };
  const t = useScopedI18n('translations.pages.patient.form.pages');
  const divider = useBreakpointValue({
    base: <Divider />,
    md: undefined,
  });

  return (
    <PageDescription title={t('caseReport.title')}>
      <Form onSubmit={console.log}>
        {({ handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            style={{ width: '100%' }}
            onChange={console.log}
          >
            <InfiniteScroll
              listProps={{
                divider,
                gap: 5,
              }}
              RenderItem={CaseReport}
              url={`/api/patient/v2/${id}/case-report/list`}
            />
          </form>
        )}
      </Form>
    </PageDescription>
  );
}
