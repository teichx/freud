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

import { Routes } from '~/core/constants';
import { useFormat } from '~/core/hooks';

import { PatientsProps } from './types';

const patients: PatientsProps[] = [
  {
    name: 'Victor Barbosa Gomes',
    identifier: ulid(),
    lastCaseReport: undefined,
    caseReportCount: 0,
  },
  {
    name: 'Laura Martins Alves',
    identifier: ulid(),
    lastCaseReport: '2020-01-1',
    caseReportCount: 1,
  },
  {
    name: 'Giovanna Ferreira Silva',
    identifier: ulid(),
    lastCaseReport: '2020-01-1',
    caseReportCount: 4,
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
              {t('header.identifier')}
            </Th>

            <Th color='inherit'>{t('header.name')}</Th>

            <Th color='inherit' w='210px' textAlign='center'>
              {t('header.case_report_count')}
            </Th>

            <Th color='inherit' w='210px' textAlign='center'>
              {t('header.last_case_report')}
            </Th>

            <Th textAlign='center' w='90px' color='inherit'>
              {t('header.actions')}
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {patients.map((x) => (
            <Tr key={x.identifier}>
              <Td>{x.identifier}</Td>
              <Td>{x.name}</Td>
              <Td textAlign='center'>
                {t('cell.case_report_count', { count: x.caseReportCount })}
              </Td>
              <Td textAlign='center'>{x.lastCaseReport || '-'}</Td>
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
