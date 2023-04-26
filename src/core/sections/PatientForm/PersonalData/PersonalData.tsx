import { Box, Stack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import {
  FormSelect,
  FormText,
  useFormSelectOptions,
} from '~/common/components/Form';
import { Section } from '~/common/components/Section';

export const PersonalData = () => {
  const { getOptions } = useFormSelectOptions();
  const { t } = useTranslation(undefined, {
    keyPrefix: 'pages.patient.create.personal',
  });

  return (
    <Section label={t('title')}>
      <Stack columnGap='4' direction={['column', 'row']}>
        <FormText name='name' label={t('name')} isRequired />

        <Box maxW='100px'>
          <FormText
            name='age'
            label={t('age')}
            mask={{ mask: Number, min: 1, max: 150 }}
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
          options={getOptions('schooling')}
        />
        <FormSelect
          name='marriage_status'
          label={t('marriage_status')}
          options={getOptions('marriage_status')}
        />
      </Stack>

      <Stack columnGap='4' direction={['column', 'row']}>
        <FormText name='address' label={t('address')} />
        <FormText
          name='phone_number'
          label={t('phone_number')}
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
