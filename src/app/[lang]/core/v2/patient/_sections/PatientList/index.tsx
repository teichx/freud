import { Tag, TagLabel } from '@chakra-ui/react';

import { ListPatientResume } from '~/app/api/patient/v2/(list)/types';
import {
  Buttons,
  DataTableColumnProps,
  DataTableInfiniteScroll,
  TextHighlight,
  TooltipDate,
} from '~/common/components';
import { useQueryFilterByName } from '~/common/query';
import { parseToHighlight } from '~/core/modules/Patient/api/parseSearchTerm';
import { useScopedI18n } from '~/i18n/client';

export const PatientList = () => {
  const { queryFilter: patientNameQueryFilter } =
    useQueryFilterByName('patientName');

  const t = useScopedI18n('translations.pages.patient.listV2');

  const COLUMNS: DataTableColumnProps<ListPatientResume>[] = [
    {
      accessor: 'name',
      label: t('header.name'),
      render: ({ data: { id, name, archivedAt } }) => (
        <Buttons.Link
          size='sm'
          variant='link'
          href={`/core/v2/patient/${id}`}
          sx={{
            color: archivedAt ? 'book.darkBlue.100' : 'book.darkBlue.900',
            _dark: {
              color: archivedAt ? 'whiteAlpha.700' : 'whiteAlpha.900',
            },
          }}
        >
          <TextHighlight
            query={patientNameQueryFilter}
            styles={{ bg: 'book.desertSun.100' }}
            transformFunction={parseToHighlight}
          >
            {name}
          </TextHighlight>
        </Buttons.Link>
      ),
    },
    {
      w: '120px',
      textAlign: 'center',
      accessor: null,
      label: t('header.status'),
      render: ({ data: { archivedAt } }) =>
        archivedAt ? (
          <Tag colorScheme='gray' variant='solid'>
            <TagLabel>{t('cell.status.archived')}</TagLabel>
          </Tag>
        ) : (
          <Tag colorScheme='green' variant='solid'>
            <TagLabel>{t('cell.status.active')}</TagLabel>
          </Tag>
        ),
    },
    {
      w: '210px',
      textAlign: 'center',
      accessor: 'caseReportCount',
      label: t('header.caseReportCount'),
      render: ({ data: { caseReportCount } }) =>
        t('cell.caseReportCount', { count: caseReportCount || 0 }),
    },
    {
      w: '210px',
      textAlign: 'center',
      accessor: 'lastCaseReport',
      label: t('header.lastCaseReport'),
      render: ({ data: { lastCaseReport } }) => (
        <TooltipDate date={lastCaseReport}>{lastCaseReport || '-'}</TooltipDate>
      ),
    },
  ];

  return (
    <DataTableInfiniteScroll
      url='/api/patient/v2'
      columns={COLUMNS}
      skeletonHeight={24}
    />
  );
};
