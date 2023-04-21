import { CheckboxGroup, SimpleGrid, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { FormText, FormCheckbox } from '~/components/Form';
import { Section } from '~/components/Section';

import { fields, fieldsTypes } from './constants';

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
      {fieldsTypes.map((type) => (
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
                columns={fields[type].length > 4 ? [1, 1, 2] : 1}
              >
                {fields[type].map((x) => (
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
