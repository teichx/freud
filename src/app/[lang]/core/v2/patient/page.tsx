'use client';
import { useRef } from 'react';

import { Box, Divider, Flex, HStack } from '@chakra-ui/react';

import { EnumListPatientStatus } from '~/app/api/patient/v2/(list)/types';
import { LinkButton } from '~/common/components/Buttons';
import {
  FormComponent,
  FormSearchQueryFilter,
  FormMultipleSwitchQueryFilter,
} from '~/common/components/Form';
import { useDefaultQuery } from '~/common/query';
import { schemaValidation } from '~/common/validation';
import { Routes } from '~/core/constants';
import { createListPatientsSchema } from '~/core/modules/Patient/api/list/listPatientsSchema';
import { useScopedI18n } from '~/i18n/client';

import { PatientList } from './_sections/PatientList';

const defaultQuery = {
  pagination: {
    limit: 20,
  },
  filters: {
    status: [EnumListPatientStatus.Active],
  },
};

const ListPatients = () => {
  const schema = useRef(createListPatientsSchema());
  const t = useScopedI18n('translations.pages.patient.listV2');
  const { getStateByString, stringParameters } = useDefaultQuery(defaultQuery);
  const state = getStateByString(stringParameters);
  const initialValues = {
    ...state,
    status: Array.isArray(state.status) ? state.status : [state.status],
  };

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
              initialValues={initialValues}
              validate={schemaValidation(schema.current)}
            >
              <HStack>
                <Box w='100%' maxW={300}>
                  <FormSearchQueryFilter
                    size='sm'
                    isRequired
                    unForceHelperText
                    name='patientName'
                    inputProps={{ placeholder: t('filter.text') }}
                  />
                </Box>

                <FormMultipleSwitchQueryFilter
                  name='status'
                  options={patientStatusOptions}
                  stackProps={{
                    direction: 'row',
                    spacing: 4,
                  }}
                />
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
