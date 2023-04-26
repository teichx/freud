import { CheckboxGroup, SimpleGrid, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { FormText, FormCheckbox } from '~/common/components/Form';
import { Section } from '~/common/components/Section';

import { COGNITIVE_FIELDS, COGNITIVE_FIELDS_TYPES } from './constants';

export const ComplainedCheck = () => {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'pages.patient.create.complained_check',
  });

  return (
    <SimpleGrid
      columnGap='4'
      columns={[1, 1, 1, 2]}
      my={['-2', '-2', '-2', '0']}
    >
      {COGNITIVE_FIELDS_TYPES.map((type) => (
        <Section
          key={type}
          w='100%'
          my={['2', '2', '2', '0']}
          label={t(`${type}.title`)}
        >
          <VStack alignItems='flex-start' w='100%'>
            <CheckboxGroup colorScheme='book.desertSun'>
              <SimpleGrid
                w='100%'
                columnGap='4'
                columns={COGNITIVE_FIELDS[type].length > 4 ? [1, 1, 2] : 1}
              >
                {COGNITIVE_FIELDS[type].map((x) => (
                  <FormCheckbox
                    key={x}
                    name={`${type}.${x}`}
                    label={t(`${type}.${x}`)}
                  />
                ))}
              </SimpleGrid>
            </CheckboxGroup>

            <FormText
              w='100%'
              isTextArea
              name={`${type}.other`}
              label={t(`${type}.other`)}
            />
          </VStack>
        </Section>
      ))}
    </SimpleGrid>
  );
};

export default ComplainedCheck;
