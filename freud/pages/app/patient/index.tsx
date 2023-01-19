import { Button, Flex } from '@chakra-ui/react';
import Link from 'next/link';

import { Routes } from '~/constants/Routes';
import { PatientsTable } from '~/sections/PatientsTable';
import { AppPage } from '~/template/app/AppPage';

const ptBR = {
  create: 'Cadastrar paciente',
};

export const Patients = () => (
  <AppPage>
    <Flex pt='2' pb='4' justifyContent='end'>
      <Button
        as={Link}
        href={Routes.App.Patient.Create}
        color='whiteAlpha.900'
        colorScheme='book.royalBlue'
      >
        {ptBR.create}
      </Button>
    </Flex>

    <PatientsTable />
  </AppPage>
);

export default Patients;
