import { FC } from 'react';

import { Tr, Td, Tfoot, Spinner, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ImSpinner2 } from 'react-icons/im';

import { DataTableFooterProps } from './types';

export const DataTableFooterLoader: FC<
  Pick<DataTableFooterProps, 'columnsLength'>
> = ({ columnsLength }) => (
  <Tfoot w='100%'>
    <Tr borderStyle='hidden'>
      <Td colSpan={columnsLength}>
        <Box
          w='100%'
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }}>
            <Spinner as={ImSpinner2} size='lg' speed='0.75s' thickness='0' />
          </motion.div>
        </Box>
      </Td>
    </Tr>
  </Tfoot>
);
