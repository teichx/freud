import { EditIcon } from '@chakra-ui/icons';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { ulid } from 'ulid';

import { Routes } from '~/constants/Routes';
import { useFormat } from '~/hooks/useFormat';

import { PatientsProps } from './types';

const patients: PatientsProps[] = [
  {
    name: 'Foo bar za',
    identifier: ulid(),
  },
  {
    name: 'Foo bar',
    identifier: ulid(),
  },
  {
    name: 'Bar foo',
    identifier: ulid(),
  },
];

export const PatientsTable = () => {
  const { colorMode } = useColorMode();
  const { formatRoute } = useFormat();
  const { t } = useTranslation(undefined, {
    keyPrefix: 'pages.patient.list',
  });

  return (
    <TableContainer
      p='4'
      borderWidth={1}
      borderRadius='md'
      borderStyle='solid'
      borderColor={colorMode === 'light' ? 'blackAlpha.300' : 'whiteAlpha.300'}
    >
      <Table variant='simple' colorScheme='book.desertSun'>
        <Thead>
          <Tr bgColor='book.navyBlue.100' color='whiteAlpha.900'>
            <Th w='306px' color='inherit'>
              {t('identifier')}
            </Th>
            <Th color='inherit'>{t('name')}</Th>
            <Th textAlign='center' w='90px' color='inherit'>
              {t('actions')}
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {patients.map((x) => (
            <Tr key={x.identifier}>
              <Td>{x.identifier}</Td>
              <Td>{x.name}</Td>
              <Td textAlign='center'>
                <IconButton
                  size='sm'
                  as={Link}
                  icon={<EditIcon />}
                  aria-label='edit'
                  href={formatRoute(Routes.Core.Patient.Edit, x.identifier)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
