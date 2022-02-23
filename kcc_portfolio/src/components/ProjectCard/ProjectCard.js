import { Container, Image, Text, Flex, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

function ProjectCard(props) {

  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Container p={0} maxW='400px'>
        <Flex direction='column' justify="flex-start" align="flex-start" gridGap="1em">
          <Image src={props.project_img} borderRadius="4px"/>
          <Flex width="100%" direction="row" justify="space-between" align="space-between">
            <Text fontWeight="300" fontStyle="normal" fontSize="1.5rem">{props.project_name}</Text>
            <Flex direction="row" justify="right" align="center" gridGap="1em">
                <FaGithub />
                <FaLink />
            </Flex>
          </Flex>
          <Text fontWeight="300" fontStyle="normal" fontSize="1rem" color={isDark ? "#C4C4C4" : "#1A1A1A" } lineHeight="1.5em">{props.project_desc}</Text>
          <Text fontWeight="300" fontStyle="normal" fontSize="0.875rem" color={isDark ? "#6CACE4" : "#004E93" }>{props.project_tech}</Text>
        </Flex>
    </Container>
  )
}

export default ProjectCard