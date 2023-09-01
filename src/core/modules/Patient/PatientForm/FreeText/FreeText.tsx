import { Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { FormText } from '~/common/components/Form';
import { Section } from '~/common/components/Section';

import { FREE_TEXT_FIELDS } from './constants';

export const FreeText = () => {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'pages.patient.create.freeText',
  });

  return (
    <Box>
      {FREE_TEXT_FIELDS.map((x) => (
        <Section key={x} label={t(x)}>
          <FormText name={`freeText.${x}`} isTextArea />
        </Section>
      ))}

      <Section label={t('others')}>
        <FormText name='freeText.other' isTextArea />
      </Section>
    </Box>
  );
};
