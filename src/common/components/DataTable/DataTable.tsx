import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
  useColorModeValue,
  Tfoot,
  Text,
  Flex,
  Icon,
  HStack,
  SkeletonText,
  Box,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import {
  MdFirstPage,
  MdLastPage,
  MdNavigateBefore,
  MdNavigateNext,
} from 'react-icons/md';

import { useQueryPagination } from '~/common/hooks';

import { FormComponent, FormSelect } from '../Form';
import { TooltipComponent } from '../TooltipComponent';
import { limitOptionsToSelect } from './functions';
import { DataTableProps, TDataId } from './types';

export function DataTable<
  TData extends TDataId = TDataId & Record<string, string>
>({
  data,
  columns,
  isLoading,
  fixedHeight,
  totalItems = 0,
  translateHeader,
  skeletonHeight = 8,
  limitOptions: limitOptionsParam = [10, 25, 50, 100],
}: DataTableProps<TData>) {
  const borderColor = useColorModeValue('blackAlpha.300', 'whiteAlpha.300');
  const { t } = useTranslation();
  const { page, limit, nextPage, previousPage, setLimit, toPage } =
    useQueryPagination();

  const noData = !data.length;
  const pageCount = Math.ceil(totalItems / limit) || 1;
  const canPrevious = page > 1;
  const canNext = page < pageCount;
  const limitOptions = Array.from(new Set([...limitOptionsParam, limit])).sort(
    (a, b) => a - b
  );

  return (
    <TableContainer
      p='4'
      borderWidth={1}
      borderRadius='md'
      borderStyle='solid'
      borderColor={borderColor}
    >
      <Table variant='simple' colorScheme='book.desertSun'>
        <Thead>
          <Tr bgColor='book.navyBlue.100' color='whiteAlpha.900'>
            {columns
              .map((x) =>
                Object.fromEntries(
                  Object.entries(x).filter(([key]) => key !== 'render')
                )
              )
              .map(({ label, ...columnProps }) => (
                <Th {...columnProps} key={label}>
                  {translateHeader ? t(label) : label}
                </Th>
              ))}
          </Tr>
        </Thead>

        <Tbody>
          {noData && !isLoading && (
            <Tr>
              <Td textAlign='center' colSpan={columns.length}>
                {t('common:dataTable.noData')}
              </Td>
            </Tr>
          )}

          {isLoading && (
            <>
              {new Array(limit).fill(undefined).map((_, index) => (
                <Tr key={index}>
                  <Td textAlign='center' colSpan={columns.length}>
                    <SkeletonText
                      noOfLines={1}
                      skeletonHeight={skeletonHeight}
                    />
                  </Td>
                </Tr>
              ))}
            </>
          )}

          {!isLoading &&
            data.map((x) => (
              <Tr key={x.id}>
                {columns.map((column) => {
                  const { accessor, render, label, ...columnProps } = column;
                  const element = accessor ? x[accessor] : null;
                  const elementDefined =
                    typeof element === 'undefined' ? '' : element;

                  const value = render
                    ? render({ data: x, column })
                    : `${elementDefined}`;

                  return (
                    <Td {...columnProps} key={label}>
                      {value}
                    </Td>
                  );
                })}
              </Tr>
            ))}

          {!isLoading && fixedHeight && (
            <>
              {new Array(limit - Math.min(limit, data?.length || 0))
                .fill(undefined)
                .map((_, index) => (
                  <Tr key={index}>
                    <Td textAlign='center' colSpan={columns.length}>
                      <Box h={skeletonHeight} />
                    </Td>
                  </Tr>
                ))}
            </>
          )}
        </Tbody>

        <Tfoot w='100%'>
          <Tr>
            <Td colSpan={columns.length}>
              <Flex
                w='100%'
                columnGap={8}
                alignItems='center'
                justifyContent='center'
              >
                <HStack w='50%' justifyContent='flex-end'>
                  <Text mr={2}>{t('common:dataTable.rowsPerPage')}</Text>

                  <FormComponent
                    onSubmit={() => undefined}
                    initialValues={{ limit }}
                  >
                    <FormSelect
                      selectOptions={{
                        menuPosition: 'fixed',
                        onChange: (value) => setLimit(Number(value?.value)),
                      }}
                      name='limit'
                      unForceHelperText
                      options={limitOptionsToSelect({ limitOptions })}
                    />
                  </FormComponent>
                </HStack>

                <HStack w='50%' justifyContent='flex-start' columnGap={1}>
                  <TooltipComponent
                    label={t('common:dataTable.pageHint.first')}
                  >
                    <IconButton
                      onClick={() => toPage(1)}
                      aria-label='First page'
                      isDisabled={!canPrevious}
                    >
                      <Icon as={MdFirstPage} />
                    </IconButton>
                  </TooltipComponent>

                  <TooltipComponent
                    label={t('common:dataTable.pageHint.before')}
                  >
                    <IconButton
                      onClick={previousPage}
                      aria-label='Before page'
                      isDisabled={!canPrevious}
                    >
                      <Icon as={MdNavigateBefore} />
                    </IconButton>
                  </TooltipComponent>

                  <Text>
                    {t('common:dataTable.pagination', { page, pageCount })}
                  </Text>

                  <TooltipComponent label={t('common:dataTable.pageHint.next')}>
                    <IconButton
                      onClick={nextPage}
                      isDisabled={!canNext}
                      aria-label='Next page'
                    >
                      <Icon as={MdNavigateNext} />
                    </IconButton>
                  </TooltipComponent>

                  <TooltipComponent label={t('common:dataTable.pageHint.last')}>
                    <IconButton
                      onClick={() => toPage(pageCount)}
                      aria-label='Last page'
                      isDisabled={!canNext}
                    >
                      <Icon as={MdLastPage} />
                    </IconButton>
                  </TooltipComponent>
                </HStack>
              </Flex>
            </Td>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
