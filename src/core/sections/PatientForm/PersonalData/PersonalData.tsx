import { Box, Stack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { FormText } from '~/components/Form';
import { Section } from '~/components/Section';

export const PersonalData = () => {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'pages.patient.create.personal',
  });

  return (
    <Section label={t('title')}>
      <Stack columnGap='4' direction={['column', 'row']}>
        <FormText name='name' label={t('name')} isRequired />

        <Box maxW='100px'>
          <FormText name='age' label={t('age')} />
        </Box>
        <Box w='300px'>
          <FormText name='gender' label={t('gender')} />
        </Box>
      </Stack>

      <Stack columnGap='4' direction={['column', 'row']}>
        <FormText name='profession' label={t('profession')} />
        <FormText name='cpf' label={t('cpf')} />
        <FormText name='rg' label={t('rg')} />
        <FormText name='schooling' label={t('schooling')} />
        <FormText name='marriage_status' label={t('marriage_status')} />
      </Stack>

      <Stack columnGap='4' direction={['column', 'row']}>
        <FormText name='address' label={t('address')} />
        <FormText name='phone_number' label={t('phone_number')} />
        <FormText name='emergency' label={t('emergency')} />
      </Stack>
    </Section>
  );
};

export default PersonalData;
