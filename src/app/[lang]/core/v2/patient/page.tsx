'use client';
import { useRef } from 'react';

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
import { EnumListPatientStatus } from '~/core/modules/Patient/api/list/types';
import { useScopedI18n } from '~/i18n/client';

import { PatientList } from './_sections/PatientList';

const defaultQuery = {
  pagination: {
    limit: 20,
  },
  filters: {
    status: [EnumListPatientStatus.Unarchive],
  },
};

const ListPatients = () => {
  const schema = useRef(createListPatientsSchema());
  const t = useScopedI18n('translations.pages.patient.list');
  const { getStateByString, stringParameters } = useDefaultQuery(defaultQuery);

  const patientStatusOptions = Object.values(EnumListPatientStatus).map(
    (x) => ({
      value: x,
      label: t(`filter.status.options.${x}`),
    })
  );

  return (
    <Box
      w='100%'
      px={{
        base: 4,
        md: 8,
      }}
      py='4'
    >
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

      <PatientList />
    </Box>
  );
};

export default ListPatients;
