import { Box, Button, ButtonGroup, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { BackButton } from '~/common/components/Buttons';
import { Section } from '~/common/components/Section';

import { PatientCaseReportUpsertModal } from '../../modal/upsert';
import { PatientCaseReportTable } from './components/PatientCaseReportTable';
import { useListCaseReports } from './hooks';

export const ListCaseReports = () => {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'pages.patient.caseReport',
  });
  const { patientId, patientName, caseReports, totalItems } =
    useListCaseReports();

  return (
    <Box w='100%'>
      <Section disabledLoading>
        <Flex justifyContent='flex-end'>
          <ButtonGroup spacing='4' variant='solid'>
            <BackButton />

            <PatientCaseReportUpsertModal
              patient={{ id: patientId, name: patientName }}
            >
              <Button color='white' colorScheme='book.desertSun'>
                {t('list.new')}
              </Button>
            </PatientCaseReportUpsertModal>
          </ButtonGroup>
        </Flex>
      </Section>

      <PatientCaseReportTable
        patientId={patientId}
        totalItems={totalItems}
        patientName={patientName}
        caseReports={caseReports}
      />
    </Box>
  );
};
