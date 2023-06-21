import { Box, Stack } from '@chakra-ui/react';
import { FormSpy } from 'react-final-form';
import { useTranslation } from 'react-i18next';

import { FormSelect, FormText } from '~/common/components/Form';
import { ReadOnlyText } from '~/common/components/ReadOnlyText';
import { Section } from '~/common/components/Section';
import { TooltipComponent } from '~/common/components/TooltipComponent';
import { calculateAge } from '~/core/helpers/dates';

import { PatientFields } from '../types';

export const PersonalData = () => {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'pages.patient.create.personal',
  });

  return (
    <Section label={t('title')}>
      <Stack columnGap='4' direction={['column', 'row']}>
        <FormText name='name' label={t('name')} isRequired />

        <Box maxW='200px'>
          <FormText
            name='birth'
            label={t('birth')}
            inputProps={{
              type: 'date',
            }}
          />
        </Box>

        <Box maxW='100px'>
          <FormSpy<PatientFields | undefined>
            render={({ values }) => (
              <TooltipComponent label={t('tooltip.age')}>
                <ReadOnlyText
                  label={t('age')}
                  unForceHelperText
                  value={calculateAge(values?.birth)}
                />
              </TooltipComponent>
            )}
          />
        </Box>
        <Box w='300px'>
          <FormText name='gender' label={t('gender')} />
        </Box>
      </Stack>

      <Stack columnGap='4' direction={['column', 'row']}>
        <FormText name='profession' label={t('profession')} />
        <FormText
          name='cpf'
          label={t('cpf')}
          mask={{ mask: '000.000.000.00' }}
        />
        <FormText name='rg' label={t('rg')} mask={{ mask: '00.000.000' }} />
        <FormSelect
          name='schooling'
          label={t('schooling')}
          optionsKey='schooling'
        />
        <FormSelect
          name='marriageStatus'
          label={t('marriageStatus')}
          optionsKey='marriageStatus'
        />
      </Stack>

      <Stack columnGap='4' direction={['column', 'row']}>
        <FormText name='address' label={t('address')} />
        <FormText
          name='phoneNumber'
          label={t('phoneNumber')}
          mask={{
            mask: [
              { mask: '(00) 0000-0000', lazy: false },
              { mask: '(00) 0 0000-0000' },
            ],
          }}
        />
        <FormText name='emergency' label={t('emergency')} />
      </Stack>
    </Section>
  );
};

export default PersonalData;
