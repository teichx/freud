import { Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { FormText } from '~/components/Form';
import { Section } from '~/components/Section';

import { FREE_TEXT_FIELDS } from './constants';

export const FreeText = () => {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'pages.patient.create.free_text',
  });

  return (
    <Box>
      {FREE_TEXT_FIELDS.map((x) => (
        <Section key={x} label={t(x)}>
          <FormText name={x} isTextArea noOfLines={15} />
        </Section>
      ))}

      <Section label={t('others')}>
        <FormText name='others' isTextArea noOfLines={15} />
      </Section>
    </Box>
  );
};
