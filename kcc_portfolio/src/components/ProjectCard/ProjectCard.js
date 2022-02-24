import { Container, Image, Text, Flex, useColorMode, Button } from '@chakra-ui/react';
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
          </Flex>
          <Text fontWeight="300" fontStyle="normal" fontSize="1rem" color={isDark ? "#C4C4C4" : "#1A1A1A" } lineHeight="1.5em">{props.project_desc}</Text>
          <Text fontWeight="300" fontStyle="normal" fontSize="0.875rem" color={isDark ? "#6CACE4" : "#004E93" }>{props.project_tech}</Text>
          <Flex direction="row" justify="right" align="center" gridGap="1em" mt="0.5em">
              <Button color={isDark ? "#F0F0F0" : "#1A1A1A" } fontWeight="300" fontSize="1rem" aria-label="Live demo link" leftIcon={<FaLink />} variant="outline" border="2px"
                // borderColor="linear-gradient(51.06deg, #9358F7 0.87%, #9259F7 7.31%, #8E5DF6 13.75%, #8862F5 20.19%, #806BF4 26.63%, #7575F2 33.07%, #6882F0 39.51%, #5990EE 45.95%, #4A9FEB 52.39%, #3BADE9 58.84%, #2EBAE7 65.28%, #23C4E5 71.72%, #1BCDE4 78.16%, #15D2E3 84.6%, #11D6E2 91.04%, #10D7E2 97.48%)"
              >
                Live demo
              </Button>
              <FaGithub size={32}/>
          </Flex>
        </Flex>
    </Container>
  )
}

export default ProjectCard