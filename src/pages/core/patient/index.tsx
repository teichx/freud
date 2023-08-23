import { ChangeEventHandler } from 'react';

import { Box, Flex, Icon, InputLeftElement } from '@chakra-ui/react';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import { FiSearch } from 'react-icons/fi';

import { LinkButton } from '~/common/components/Buttons';
import { FormComponent, FormText } from '~/common/components/Form';
import { Section } from '~/common/components/Section';
import { useQueryFilter } from '~/common/query';
import { Routes } from '~/core/constants';
import { PatientsTable } from '~/core/modules/Patient/PatientsTable';
import { AppPage } from '~/core/template/AppPage';

export const Patients = () => {
  const { setFilters } = useQueryFilter();

  const { t } = useTranslation(undefined, {
    keyPrefix: 'pages.patient.list',
  });

  return (
    <AppPage titleKey='patient.list'>
      <Section>
        <Flex justifyContent='space-between' alignItems='center'>
          <Box w='100%' maxW={300}>
            <FormComponent onSubmit={() => undefined}>
              <FormText
                name='name'
                inputProps={{
                  placeholder: t('search') || '',
                  onChange: _.debounce<ChangeEventHandler<HTMLInputElement>>(
                    (e) => setFilters({ patientName: e.target.value }),
                    500
                  ),
                }}
                InputLeftElement={
                  <InputLeftElement>
                    <Icon as={FiSearch} />
                  </InputLeftElement>
                }
                unForceHelperText
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
