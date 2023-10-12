import { ChangeEventHandler, FC } from 'react';

import { Icon, InputLeftElement } from '@chakra-ui/react';
import _ from 'lodash';
import { FiSearch } from 'react-icons/fi';

import { useQueryFilter } from '~/common/query';

import { FormText } from '../FormText';
import { FormSearchQueryFilterProps } from './types';

export const FormSearchQueryFilter: FC<FormSearchQueryFilterProps> = ({
  name,
  inputProps,
  debounceDelay = 500,
  ...props
}) => {
  const { combineFilters } = useQueryFilter();

  return (
    <FormText
      {...props}
      name={name}
      inputProps={{
        ...inputProps,
        onChange: _.debounce<ChangeEventHandler<HTMLInputElement>>(
          (e) => combineFilters(name, e.target.value),
          debounceDelay
        ),
      }}
      InputLeftElement={
        <InputLeftElement>
          <Icon as={FiSearch} />
        </InputLeftElement>
      }
    />
  );
};
