import { useMemo } from 'react';

import { Box, Flex, HStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { LinkButton } from '~/common/components/Buttons';
import {
  FormComponent,
  FormSearchQueryFilter,
  FormSelectQueryFilter,
} from '~/common/components/Form';
import { Section } from '~/common/components/Section';
import { schemaValidation } from '~/common/helpers';
import { useDefaultQuery } from '~/common/query';
import { Routes } from '~/core/constants';
import { listPatientsSchema } from '~/core/modules/Patient/api/list/listPatientsSchema';
import { PatientsTable } from '~/core/modules/Patient/pages/list/components/PatientsTable';
import { AppPage } from '~/core/template/AppPage';

import { EnumListPatientStatus } from '../../api/list/types';

const defaultQuery = {
  pagination: {
    page: 1,
    limit: 10,
  },
  filters: {
    status: [EnumListPatientStatus.Unarchive],
  },
};

export const ListPatients = () => {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'pages.patient.list',
  });
  const { getStateByString, stringParameters } = useDefaultQuery(defaultQuery);

  const patientStatusOptions = useMemo(
    () =>
      Object.values(EnumListPatientStatus).map((x) => ({
        value: x,
        label: t(`filter.status.options.${x}`),
      })),
    [t]
  );

  return (
    <AppPage titleKey='patient.list'>
      <Section>
        <Flex alignItems='center'>
          <Box w='100%'>
            <FormComponent
              onSubmit={() => undefined}
              validateOnBlur
              initialValues={getStateByString(stringParameters)}
              validate={schemaValidation(listPatientsSchema)}
            >
              <HStack>
                <Box w='100%' maxW={300}>
                  <FormSearchQueryFilter
                    name='patientName'
                    isRequired
                    inputProps={{ placeholder: t('filter.text') }}
                  />
                </Box>

                <Box w='100%' maxW={400}>
                  <FormSelectQueryFilter<true>
                    isMulti
                    selectOptions={{
                      isClearable: false,
                      placeholder: t('filter.status.placeholder'),
                    }}
                    name='status'
                    options={patientStatusOptions}
                  />
                </Box>
              </HStack>
            </FormComponent>
          </Box>

          <Box mb='6' pb='1'>
            <LinkButton
              text={t('createLabel')}
              href={Routes.Core.Patient.Create}
              color='whiteAlpha.900'
              colorScheme='book.desertSun'
            />
          </Box>
        </Flex>
      </Section>

      <PatientsTable />
    </AppPage>
  );
};
