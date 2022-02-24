import { Box, Flex, IconButton, Link, Spacer, Text } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useColorMode } from '@chakra-ui/color-mode'
import React from 'react'
import { Link as ReactLink } from 'react-router-dom'

function Navbar() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Flex direction="row" justify="center" align="center" width="100%" p="2.5em 15em 2.5em 15em">
      <Box>
        <Text fontStyle="normal" fontWeight="200" fontSize="1.5rem">
          <Link as={ReactLink} to='/' style={{ textDecoration: 'none' }}>
            KCC.
          </Link>
        </Text>
      </Box>
        
      <Spacer />

      <Flex direction="row" justify="center" align="center" gridGap="2em">
        <Link fontStyle="normal" fontWeight="200" fontSize="1.125rem" as={ReactLink} to='/projects'>Projects</Link>
        <Link fontStyle="normal" fontWeight="200" fontSize="1.125rem" as={ReactLink} to='/skills'>Skills</Link>
        <Link fontStyle="normal" fontWeight="200" fontSize="1.125rem" as={ReactLink} to='/cv'>CV</Link>
        <Link fontStyle="normal" fontWeight="200" fontSize="1.125rem" as={ReactLink} to='/contact'>Contact</Link>
        <IconButton icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
      </Flex>
    </Flex>
  )
}

export default Navbar