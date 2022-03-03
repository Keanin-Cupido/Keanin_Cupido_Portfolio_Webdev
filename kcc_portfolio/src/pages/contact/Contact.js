import { Box, Divider, Flex, Heading, Text, useColorMode, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaLocationArrow, FaPhoneAlt } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Footer from '../../components/Footer';

function Contact() {

  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <VStack w="100%">
      <VStack w="100%" 
        justify="left" align="left" spacing="2em"
        pb="5em"
      >
        <Flex direction="column">
          <Heading fontWeight="700" fontStyle="normal" fontSize="4rem" bgGradient='linear-gradient(90deg, #9845E8 0%, #33D2FF 20%, #DD5789 50%)' bgClip='text'>Contact</Heading>
        </Flex>
        
        <Flex direction="column" gridGap="1.5em">
          <Text color={isDark ? "#F0F0F0" : "#1A1A1A" } fontWeight="200" fontStyle="normal" fontSize="1.125rem">
            Get in touch with me.
          </Text>
        </Flex>
      </VStack>

      {/* Contacts */}
      <VStack justify="flex-start" align="left" alignItems="left" w="100%" pb="5em">
        <Flex direction="row" gridGap="1em" justify="left" align="center">
          <FaPhoneAlt size="1.25em"/>
          <Text fontSize="1.25rem">
            081 705 8297
          </Text>
        </Flex>
        <Flex direction="row" gridGap="1em" justify="left" align="center">
          <SiGmail size="1.25em"/>
          <Text fontSize="1.25rem">
            iamkeanincupido@gmail.com
          </Text>
        </Flex>
        <Flex direction="row" gridGap="1em" justify="left" align="center">
          <FaLocationArrow size="1.25em"/>
          <Text fontSize="1.25rem">
            Cape Town, South Africa
          </Text>
        </Flex>
      </VStack>


      <Box w="100%" pb="5em">
        <Divider orientation="horizontal" colorScheme="white"/>
      </Box>

      {/* Contact Footer */}
      <Footer />
      
  </VStack>
  )
}

export default Contact