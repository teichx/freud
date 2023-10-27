import { FC } from 'react';

import { Tr, Td, Tfoot, Text, Flex, Icon, HStack } from '@chakra-ui/react';
import {
  MdFirstPage,
  MdLastPage,
  MdNavigateBefore,
  MdNavigateNext,
} from 'react-icons/md';

import { useQueryPaginate } from '~/common/query';
import { useScopedI18n } from '~/i18n/client';

import { FormComponent, FormSelect } from '../../Form';
import { TooltipComponent } from '../../TooltipComponent';
import { limitOptionsToSelect } from '../functions';
import { FooterIconButton } from './styles';
import { DataTableFooterProps } from './types';

export const DataTableFooter: FC<DataTableFooterProps> = ({
  totalItems,
  columnsLength,
  limitOptions: limitOptionsParam,
}) => {
  const t = useScopedI18n('components.dataTable');

  const { page, limit, nextPage, previousPage, setLimit, toPage } =
    useQueryPaginate();

  const pageCount = Math.ceil((totalItems || 0) / limit) || 1;
  const canPrevious = page > 1;
  const canNext = page < pageCount;
  const limitOptions = Array.from(new Set([...limitOptionsParam, limit])).sort(
    (a, b) => a - b
  );

  return (
    <Tfoot w='100%'>
      <Tr>
        <Td colSpan={columnsLength}>
          <Flex
            w='100%'
            columnGap={8}
            alignItems='center'
            justifyContent='center'
          >
            <HStack w='50%' justifyContent='flex-end'>
              <Text mr={2}>{t('rowsPerPage')}</Text>

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
              <TooltipComponent label={t('pageHint.first')}>
                <FooterIconButton
                  onClick={() => toPage(1)}
                  aria-label='First page'
                  isDisabled={!canPrevious}
                >
                  <Icon as={MdFirstPage} />
                </FooterIconButton>
              </TooltipComponent>

              <TooltipComponent label={t('pageHint.before')}>
                <FooterIconButton
                  onClick={previousPage}
                  aria-label='Before page'
                  isDisabled={!canPrevious}
                >
                  <Icon as={MdNavigateBefore} />
                </FooterIconButton>
              </TooltipComponent>

              <Text>{t('pagination', { page, pageCount })}</Text>

              <TooltipComponent label={t('pageHint.next')}>
                <FooterIconButton
                  onClick={nextPage}
                  isDisabled={!canNext}
                  aria-label='Next page'
                >
                  <Icon as={MdNavigateNext} />
                </FooterIconButton>
              </TooltipComponent>

              <TooltipComponent label={t('pageHint.last')}>
                <FooterIconButton
                  onClick={() => toPage(pageCount)}
                  aria-label='Last page'
                  isDisabled={!canNext}
                >
                  <Icon as={MdLastPage} />
                </FooterIconButton>
              </TooltipComponent>
            </HStack>
          </Flex>
        </Td>
      </Tr>
    </Tfoot>
  );
};
