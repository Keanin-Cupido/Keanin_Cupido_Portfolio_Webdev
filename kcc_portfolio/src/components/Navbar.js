import { Box, Flex, IconButton, Link, Spacer, Text } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useColorMode } from '@chakra-ui/color-mode'
import React from 'react'

function Navbar() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Flex direction="row" justify="center" align="center" width="100%" p="2.5em 15em 2.5em 15em">
      <Box>
        <Text fontStyle="normal" fontWeight="200" fontSize="1.5rem">
          KCC.
        </Text>
      </Box>
        
      <Spacer />

      <Flex direction="row" justify="center" align="center" gridGap="2em">
        <Link fontStyle="normal" fontWeight="200" fontSize="1.125rem">Projects</Link>
        <Link fontStyle="normal" fontWeight="200" fontSize="1.125rem">CV</Link>
        <Link fontStyle="normal" fontWeight="200" fontSize="1.125rem">Contact</Link>
        <IconButton icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
      </Flex>
    </Flex>
  )
}

export default Navbar