import { Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { LinkButton } from '~/common/components/Buttons';
import { FormComponent, FormSearchQueryFilter } from '~/common/components/Form';
import { Section } from '~/common/components/Section';
import { Routes } from '~/core/constants';
import { PatientsTable } from '~/core/modules/Patient/PatientsTable';
import { AppPage } from '~/core/template/AppPage';

export const Patients = () => {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'pages.patient.list',
  });

  return (
    <AppPage titleKey='patient.list'>
      <Section>
        <Flex justifyContent='space-between' alignItems='center'>
          <Box w='100%' maxW={300}>
            <FormComponent onSubmit={() => undefined}>
              <FormSearchQueryFilter
                name='patientName'
                inputProps={{ placeholder: t('search') }}
              />
            </FormComponent>
          </Box>

          <LinkButton
            text={t('createLabel')}
            href={Routes.Core.Patient.Create}
            color='whiteAlpha.900'
            colorScheme='book.desertSun'
          />
        </Flex>
      </Section>

      <PatientsTable />
    </AppPage>
  );
};

export default Patients;
