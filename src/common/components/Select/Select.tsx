import { RefAttributes } from 'react';

import {
  Select as ChakraSelect,
  GroupBase,
  Props,
  SelectInstance,
} from 'chakra-react-select';

import { useScopedI18n } from '~/i18n/client';

export function Select<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: Props<Option, IsMulti, Group> &
    RefAttributes<SelectInstance<Option, IsMulti, Group>>
) {
  const t = useScopedI18n('components.select');
  return (
    <ChakraSelect
      placeholder={t(
        props.isMulti ? 'placeholder.multiple' : 'placeholder.unique'
      )}
      noOptionsMessage={(x) =>
        x.inputValue ? t('empty.filled', x) : t('empty.unfilled')
      }
      {...props}
      chakraStyles={{
        dropdownIndicator: (x) => ({
          ...x,
          bg: 'blackAlpha.100',
          _dark: {
            bg: 'whiteAlpha.100',
          },
        }),
      }}
    />
  );
}
