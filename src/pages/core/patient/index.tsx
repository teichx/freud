import { Button, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

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
        <Button
          as={Link}
          href={Routes.Core.Patient.Create}
          color='whiteAlpha.900'
          colorScheme='book.royalBlue'
        >
          {t('create_label')}
        </Button>
      </Flex>

      <PatientsTable />
    </AppPage>
  );
};

export default Patients;
