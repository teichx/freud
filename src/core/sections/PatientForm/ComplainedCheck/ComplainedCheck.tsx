import { Checkbox, CheckboxGroup, SimpleGrid, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { FormText } from '~/components/Form';
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
                  <Checkbox key={x} name={x}>
                    {t(`${type}.${x}`)}
                  </Checkbox>
                ))}
              </SimpleGrid>
            </CheckboxGroup>

            <FormText
              w='100%'
              isTextArea
              name='cognitive.other'
              label={t('cognitive.other')}
            />
          </VStack>
        </Section>
      ))}
    </SimpleGrid>
  );
};

export default ComplainedCheck;
