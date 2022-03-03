import { Box, Button, Divider, Flex, Heading, Link, Menu, MenuButton, MenuItem, MenuList, Text, useColorMode, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaChevronDown } from 'react-icons/fa';
import EducationList from '../../components/Education/EducationList';
import ExperienceList from '../../components/Experience/ExperienceList';

function CV() {

  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <VStack w="100%"
      alignItems="flex-start"
    >
      <VStack w="100%" 
        justify="left" align="left" spacing="2em"
        pb="5em"
      >
        <Flex direction="column">
          <Heading fontWeight="700" fontStyle="normal" fontSize="4rem" bgGradient='linear-gradient(90deg, #9845E8 0%, #33D2FF 20%, #DD5789 50%)' bgClip='text'>Curriculum Vitae</Heading>
        </Flex>
        
        <Flex direction="column" gridGap="1.5em" flexGrow="1">
          <Link w="max-content" color={isDark ? "#F0F0F0" : "#1A1A1A" } href="https://github.com/Keanin-Cupido" isExternal>github.com/Keanin-Cupido</Link>
          <Text color={isDark ? "#F0F0F0" : "#1A1A1A" } fontWeight="200" fontStyle="normal" fontSize="1.125rem">
            A creative web developer with a passion for design, animation, interaction, problem-solving, and for mastering the latest front-end technologies.
          </Text>
          <Menu>
            <MenuButton as={Button} rightIcon={<FaChevronDown />} w="max-content">
              Download
            </MenuButton>
            <MenuList>
              <MenuItem>CV (PDF)</MenuItem>
              <MenuItem>CV (Word)</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </VStack>


      <Box w="100%" pb="5em">
        <Divider orientation="horizontal" colorScheme="white"/>
      </Box>

      {/* Education */}
      <VStack w="100%" align="left" spacing="2.5em">
        <Text fontWeight="300" fontStyle="normal" fontSize="1.125rem" align="left" justify="left">Education</Text>
        <EducationList />          
      </VStack>
      
      <Box w="100%" pb="5em" pt="5em">
        <Divider orientation="horizontal" colorScheme="white"/>
      </Box>

      {/* Work */}
      <VStack w="100%" align="left" spacing="2.5em">
        <Text fontWeight="300" fontStyle="normal" fontSize="1.125rem" align="left" justify="left">Work</Text>
        <ExperienceList />          
      </VStack>

      <Box w="100%" pb="5em" pt="5em">
        <Divider orientation="horizontal" colorScheme="white"/>
      </Box>
  </VStack>
  )
}

export default CV