import { Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { LinkButton } from '~/common/components/Buttons';
import { Routes } from '~/core/constants';
import { PatientsTable } from '~/core/sections/PatientsTable';
import { AppPage } from '~/core/template/AppPage';

export const Patients = () => {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'pages.patient.list',
  });

  return (
    <AppPage>
      <Flex pt='2' pb='4' justifyContent='end'>
        <LinkButton
          text={t('createLabel')}
          href={Routes.Core.Patient.Create}
          color='whiteAlpha.900'
          colorScheme='book.royalBlue'
        />
      </Flex>

      <PatientsTable />
    </AppPage>
  );
};

export default Patients;
