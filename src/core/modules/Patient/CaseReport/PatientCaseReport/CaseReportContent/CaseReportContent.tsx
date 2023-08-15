import { useEffect, useRef } from 'react';

import { Box } from '@chakra-ui/react';
import { useForm } from 'react-final-form';
import { useTranslation } from 'react-i18next';

import { FormText } from '~/common/components/Form';
import { useSpeechToText } from '~/common/hooks/useSpeechToText';

export const CaseReportContent = () => {
  const textRef = useRef('');
  const form = useForm();
  const { t: tHelperText } = useTranslation(undefined, {
    keyPrefix: 'helperText',
  });
  const { t } = useTranslation(undefined, {
    keyPrefix: 'pages.patient.caseReport',
  });
  const { text, isListening, Microphone } = useSpeechToText({
    onStart: () => {
      textRef.current = form.getFieldState('content')?.value || '';
    },
  });

  useEffect(() => {
    const newState = textRef.current + text;
    form.change('content', newState);
  }, [form, text]);

  return (
    <Box w='100%' position='relative' mb='4'>
      <Box position='relative'>
        <FormText
          isTextArea
          isRequired
          isReadOnly={isListening}
          isDisabled={isListening}
          name='content'
          label={t('content')}
          inputProps={{ h: '200px' }}
          helperText={
            isListening
              ? tHelperText('editOnlyNotListening') || undefined
              : undefined
          }
        />
      </Box>

      <Box position='absolute' right='0' bottom='6' mr='3' mb='3'>
        <Microphone />
      </Box>
    </Box>
  );
};
