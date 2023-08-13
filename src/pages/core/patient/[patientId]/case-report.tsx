import { Button, ButtonGroup, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { BackButton } from '~/common/components/Buttons';
import { Section } from '~/common/components/Section';
import { useListCaseReports } from '~/core/modules/Patient/CaseReport/hooks';
import { PatientCaseReport } from '~/core/modules/Patient/CaseReport/PatientCaseReport';
import { PatientCaseReportTable } from '~/core/modules/Patient/CaseReport/PatientCaseReportTable';
import { AppPage } from '~/core/template/AppPage';

export const CaseReport = () => {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'pages.patient.caseReport',
  });
  const { patientId, patientName, caseReports, totalItems } =
    useListCaseReports();

  return (
    <AppPage titleKey='patient.listCaseReports'>
      <Section disabledLoading>
        <Flex justifyContent='flex-end'>
          <ButtonGroup spacing='4' variant='solid'>
            <BackButton />

            <PatientCaseReport patient={{ id: patientId, name: patientName }}>
              <Button color='white' colorScheme='book.desertSun'>
                {t('list.new')}
              </Button>
            </PatientCaseReport>
          </ButtonGroup>
        </Flex>
      </Section>

      <PatientCaseReportTable
        patientId={patientId}
        totalItems={totalItems}
        patientName={patientName}
        caseReports={caseReports}
      />
    </AppPage>
  );
};

export default CaseReport;
