import { Box, Button, Divider, Flex, Text, useColorMode, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaGithub, FaLinkedinIn, FaMailchimp } from 'react-icons/fa';

function Footer() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === 'dark';

  return (
      <VStack w="100%">
        <Flex direction={{sm: "column", md: "row"}} align='flex-start' w="100%" alignItems='flex-start' verticalAlign='top' gridGap="5em" justify="space-between" pb="5em">
            <Text fontWeight="300" fontStyle="normal" fontSize="1.125rem">CONTACT</Text>
            <Flex direction={{sm: "column", md: "row"}} align="flex-start" w="100%" alignItems="flex-start" gridGap="1em">
                <Button color={isDark ? "#F0F0F0" : "#1A1A1A" } fontWeight="300" fontSize="1rem" aria-label="My Email Contact" leftIcon={<FaMailchimp />}>Send an email</Button>
                <Button color={isDark ? "#F0F0F0" : "#1A1A1A" } fontWeight="300" fontSize="1rem" aria-label="My Email Contact" leftIcon={<FaLinkedinIn />}>LinkedIn</Button>
                <Button color={isDark ? "#F0F0F0" : "#1A1A1A" } fontWeight="300" fontSize="1rem" aria-label="My Email Contact" leftIcon={<FaGithub />}>Github</Button>
            </Flex>
        </Flex>
        <Box w="100%" pb="1em">
            <Divider orientation="horizontal" colorScheme="white"/>
        </Box>
        <Text color={isDark ? "#F0F0F0" : "#1A1A1A" } fontWeight="200" fontStyle="normal" align="flex-start" w="100%" alignItems="flex-start" fontSize="0.66rem">@ 2022 Keanin Cupido</Text>
      </VStack>
  )
}

export default Footer