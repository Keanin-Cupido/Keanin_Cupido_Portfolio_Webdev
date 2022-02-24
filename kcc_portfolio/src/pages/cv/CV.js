import { Box, Button, Divider, Flex, Heading, Text, useColorMode, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaGithub, FaLinkedinIn, FaMailchimp } from 'react-icons/fa';
import Navbar from '../../components/Navbar'

function CV() {

  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <VStack w="100%"
      p={{ sm: '5em 5em 5em 5em', md: '5em 5em 5em 5em', lg: '5em 10em 5em 10em', xl: '5em 15em 5em 15em' }}
    >
      <Navbar />

      <VStack w="100%" 
        justify="left" align="left" spacing="2em"
        pb="5em"
      >
        <Flex direction="column" gridGap="1em">
          <Text>Hey, I'm</Text>
          <Heading fontWeight="700" fontStyle="normal" fontSize="6rem" bgGradient='linear-gradient(90deg, #9845E8 0%, #33D2FF 20%, #DD5789 50%)' bgClip='text'>CV</Heading>
        </Flex>
        
        <Flex direction="column" gridGap="1.5em">
          <Text color={isDark ? "#F0F0F0" : "#1A1A1A" } fontWeight="200" fontStyle="normal" fontSize="1.125rem">
            I'm a front-end developer based in Cape Town, South Africa and also a Computer Science student. 
            I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. 
            I have been freelancing for a year now while studying at the university and I've manage to gain a decent amount of experience and valuable knowledge from all different kinds of fields throughout my projects/work.
          </Text>
        </Flex>
      </VStack>

      <Box w="100%" pb="5em">
        <Divider orientation="horizontal" colorScheme="white"/>
      </Box>

      {/* Contact Footer */}
      <Flex direction={{sm: "column", md: "row"}} align='flex-start' w="100%" alignItems='flex-start' verticalAlign='top' gridGap="5em" justify="space-between" pb="5em">
        <Text fontWeight="300" fontStyle="normal" fontSize="1.125rem">CONTACT</Text>
        <Flex direction={{sm: "column", md: "row"}} align="flex-start" w="100%" alignItems="flex-start" gridGap="1em">
          <Button color={isDark ? "#F0F0F0" : "#1A1A1A" } fontWeight="300" fontSize="1rem" aria-label="My Email Contact" leftIcon={<FaMailchimp />}>Send an email</Button>
          <Button color={isDark ? "#F0F0F0" : "#1A1A1A" } fontWeight="300" fontSize="1rem" aria-label="My Email Contact" leftIcon={<FaLinkedinIn />}>LinkedIn</Button>
          <Button color={isDark ? "#F0F0F0" : "#1A1A1A" } fontWeight="300" fontSize="1rem" aria-label="My Email Contact" leftIcon={<FaGithub />}>Github</Button>
        </Flex>
      </Flex>
  </VStack>
  )
}

export default CV