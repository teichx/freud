import { Box, Button, ButtonGroup, Flex } from '@chakra-ui/react';

import { BackButton } from '~/common/components/Buttons';
import { Section } from '~/common/components/Section';
import { useDefaultQuery } from '~/common/query';
import { useScopedI18n } from '~/i18n/client';

import { PatientCaseReportUpsertModal } from '../../modal/upsert';
import { PatientCaseReportTable } from './components/PatientCaseReportTable';
import { useListCaseReports } from './hooks';

const defaultQuery = {
  pagination: {
    page: 1,
    limit: 10,
  },
};

export const ListCaseReports = () => {
  const t = useScopedI18n('translations.pages.patient.caseReport');
  useDefaultQuery(defaultQuery);

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
