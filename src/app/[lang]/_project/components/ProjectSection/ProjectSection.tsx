import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';

import { ProjectSectionImage } from './ProjectSectionImage';
import { ProjectSectionWrapper } from './ProjectSectionWrapper';
import { ProjectSectionProps } from './types';

export const ProjectSection = ({
  title,
  paragraphs,
  textPosition,
  image,
  children,
  sx,
}: ProjectSectionProps) => {
  const titleArray = Array.isArray(title) ? title : [title];

  return (
    <ProjectSectionWrapper sx={sx}>
      <SimpleGrid columns={[1, 1, 1, 2]} columnGap='5%' alignItems='center'>
        <Box order={{ lg: textPosition === 'left' ? -1 : 1 }}>
          <Heading as='h2' size='lg' mb='5'>
            {titleArray.map((currentTitle, index) => (
              <span key={currentTitle}>
                {currentTitle}
                {titleArray.length - 1 === index ? '' : <br />}
              </span>
            ))}
          </Heading>

          {paragraphs.map((item, index) =>
            typeof item === 'string' ? (
              <Text key={item} mb={index === paragraphs.length - 1 ? 0 : '2'}>
                {item}
              </Text>
            ) : (
              item
            )
          )}
        </Box>

        {image ? (
          <Box>
            <ProjectSectionImage {...image} />
          </Box>
        ) : (
          children || <Box />
        )}
      </SimpleGrid>
    </ProjectSectionWrapper>
  );
};
