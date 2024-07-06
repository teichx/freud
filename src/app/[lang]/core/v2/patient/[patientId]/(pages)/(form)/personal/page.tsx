'use client';
import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
import { FormSpy } from 'react-final-form';

import {
  FormSelect,
  FormText,
  ReadOnlyText,
  TooltipComponent,
} from '~/common/components';
import { useScopedI18n } from '~/i18n/client';

import { PageDescription } from '../../../_sections';
import { calculateAge } from './calculateAge';

export default function PatientPersonal() {
  const t = useScopedI18n('translations.pages.patient.form.pages.personal');

  return (
    <PageDescription title={t('title')}>
      <SimpleGrid columnGap='4' columns={[1, 1, 2, 2, 3]} maxW={900}>
        <Box>
          <FormText
            name='personal.cpf'
            label={t('cpf')}
            mask={{ mask: '000.000.000.00' }}
          />
        </Box>
        <Box>
          <FormText
            name='personal.rg'
            label={t('rg')}
            mask={{ mask: '00.000.000' }}
          />
        </Box>

        <Flex columnGap='4'>
          <FormText
            name='personal.birth'
            label={t('birth')}
            inputProps={{
              type: 'date',
            }}
          />

          <Box maxW={100}>
            <FormSpy<{ personal?: { birth?: string } }>
              render={({ values }) => (
                <TooltipComponent label={t('tooltip.age')}>
                  <ReadOnlyText
                    label={t('age')}
                    unForceHelperText
                    value={calculateAge(values?.personal?.birth)}
                  />
                </TooltipComponent>
              )}
            />
          </Box>
        </Flex>
      </SimpleGrid>

      <SimpleGrid mt={4} columnGap='4' columns={[1, 1, 2, 2, 4]}>
        <FormText name='personal.profession' label={t('profession')} />
        <FormText name='personal.gender' label={t('gender')} />

        <FormSelect
          name='personal.schooling'
          label={t('schooling')}
          optionsKey='schooling'
        />

        <FormSelect
          name='personal.marriageStatus'
          label={t('marriageStatus')}
          optionsKey='marriageStatus'
        />
      </SimpleGrid>
    </PageDescription>
  );
}
