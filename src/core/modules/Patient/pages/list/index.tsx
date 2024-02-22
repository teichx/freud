import { useMemo, useRef } from 'react';

import { Box, Divider, Flex, HStack } from '@chakra-ui/react';

import { LinkButton } from '~/common/components/Buttons';
import {
  FormComponent,
  FormSearchQueryFilter,
  FormSelectQueryFilter,
} from '~/common/components/Form';
import { useDefaultQuery } from '~/common/query';
import { schemaValidation } from '~/common/validation';
import { Routes } from '~/core/constants';
import { createListPatientsSchema } from '~/core/modules/Patient/api/list/listPatientsSchema';
import { PatientsTable } from '~/core/modules/Patient/pages/list/components/PatientsTable';
import { useScopedI18n } from '~/i18n/client';

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
  const schema = useRef(createListPatientsSchema());
  const t = useScopedI18n('translations.pages.patient.list');
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
    <Box w='100%'>
      <Box py='3'>
        <Flex alignItems='start'>
          <Box w='100%'>
            <FormComponent
              onSubmit={() => undefined}
              validateOnBlur
              initialValues={getStateByString(stringParameters)}
              validate={schemaValidation(schema.current)}
            >
              <HStack>
                <Box w='100%' maxW={300}>
                  <FormSearchQueryFilter
                    size='sm'
                    isRequired
                    name='patientName'
                    inputProps={{ placeholder: t('filter.text') }}
                  />
                </Box>

                <Box w='100%' maxW={400}>
                  <FormSelectQueryFilter<true>
                    isMulti
                    size='sm'
                    name='status'
                    selectOptions={{
                      size: 'sm',
                      isClearable: false,
                      placeholder: t('filter.status.placeholder'),
                    }}
                    options={patientStatusOptions}
                  />
                </Box>
              </HStack>
            </FormComponent>
          </Box>

          <LinkButton
            text={t('createLabel')}
            size='sm'
            href={Routes.Core.Patient.Create}
            sx={{
              color: 'white',
              bg: 'book.desertSun.500',
              _hover: {
                bg: 'book.desertSun.600',
              },
              _dark: {
                bg: 'book.desertSun.600',
                _hover: {
                  bg: 'book.desertSun.500',
                },
              },
            }}
          />
        </Flex>
      </Box>

      <Divider mb='5' />

      <PatientsTable />
    </Box>
  );
};
