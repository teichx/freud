import { PropsWithChildren } from 'react';

import { Box, SystemStyleObject } from '@chakra-ui/react';

import { ProjectSectionWrapper } from './ProjectSectionWrapper';

export const ProjectFirstSection = ({
  children,
  sx,
}: PropsWithChildren<{ sx?: SystemStyleObject }>) => (
  <ProjectSectionWrapper>
    <Box
      sx={{
        minH: '100vh',
        display: 'flex',
        alignItems: 'center',
        mt: '-80px',
        ...sx,
      }}
    >
      <Box transform='translateY(-100%)'>{children}</Box>
    </Box>
  </ProjectSectionWrapper>
);
