'use client';
import {
  Box,
  CheckboxGroup,
  Divider,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';

import { FormCheckbox, FormText } from '~/common/components';
import { useScopedI18n } from '~/i18n/client';

import { PageDescription } from '../../../_sections';
import {
  COGNITIVE_FIELDS,
  COGNITIVE_FIELDS_TYPES,
  COMPLAINED_HISTORY_FIELDS,
} from './constants';
import { CognitiveOptionsKeys } from './types';

export default function PatientComplained() {
  const t = useScopedI18n('translations.pages.patient.form.pages.complained');

  return (
    <PageDescription title={t('title')}>
      <HStack
        columnGap='4'
        flexDirection={['column', 'column', 'column', 'row']}
      >
        {COGNITIVE_FIELDS_TYPES.map((type) => (
          <Box key={type} w='100%'>
            <Heading variant='h3' fontSize='xl' fontWeight='semibold' mb='2'>
              {t(`${type}.title`)}
            </Heading>

            <Box minH={145}>
              <CheckboxGroup colorScheme='book.desertSun'>
                <SimpleGrid
                  w='100%'
                  columnGap='4'
                  columns={COGNITIVE_FIELDS[type].length > 4 ? [1, 1, 2] : 1}
                >
                  {COGNITIVE_FIELDS[type].map((x) => (
                    <Box key={x}>
                      <FormCheckbox
                        name={`symptoms.${type}.${x}`}
                        label={t(`${type}.${x}` as CognitiveOptionsKeys)}
                      />
                    </Box>
                  ))}
                </SimpleGrid>
              </CheckboxGroup>
            </Box>

            <FormText
              w='100%'
              isTextArea
              name={`symptoms.${type}Details`}
              label={t(`${type}.other`)}
            />
          </Box>
        ))}
      </HStack>

      <Divider mt={2} mb={4} />

      <Box>
        <Heading variant='h3' fontSize='xl' fontWeight='semibold' mb='2'>
          {t('history.title')}
        </Heading>

        <Flex flexDirection='column'>
          {COMPLAINED_HISTORY_FIELDS.map((x) => (
            <FormText
              key={x}
              isTextArea
              label={t(`history.fields.${x}`)}
              name={`history.${x}`}
            />
          ))}
        </Flex>
      </Box>
    </PageDescription>
  );
}
