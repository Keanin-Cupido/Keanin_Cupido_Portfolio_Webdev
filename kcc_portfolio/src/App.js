import { Container, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { useColorMode } from '@chakra-ui/color-mode'

import Navbar from "./components/Navbar";

function App() {

  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
      <VStack>
        <Navbar />

        <VStack p="5em 15em 5em 15em" justify="left" align="left" spacing="2em">
          <Flex direction="column" gridGap="1em">
            <Text>Hey, I'm</Text>
            <Heading fontWeight="700" fontStyle="normal" fontSize="6rem" bgGradient='linear-gradient(90deg, #9845E8 0%, #33D2FF 20%, #DD5789 50%)' bgClip='text'>Keanin Cupido</Heading>
          </Flex>
          <Flex direction="column" gridGap="1.5em">
            <Text  color={isDark ? "#F0F0F0" : "#1A1A1A" } fontWeight="200" fontStyle="normal" fontSize="1.125rem">
              I'm a front-end developer based in Cape Town, South Africa and also a Computer Science student. 
              I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. 
              I have been freelancing for a year now while studying at the university and I've manage to gain a decent amount of experience and valuable knowledge from all different kinds of fields throughout my projects/work.
            </Text>
            <Flex direction="row" justify="left" align="center" gridGap="1em">
              <Link>
                <Text fontWeight="300" fontStyle="normal" fontSize="1.5rem" >
                  Say hi
                </Text>
              </Link>
              <FaArrowRight />
            </Flex>
          </Flex>
        </VStack>

        {/* Projects Section */}
        <VStack p="2.5em 15em 5em 15em" justify="left" align="left" spacing="1em">
          <Text fontWeight="300" fontStyle="normal" fontSize="1.125rem">FEATURED PROJECTS</Text>
          <Container p={0} justify="left" align="left">
            {/* Project Card Components */}
            <Text fontWeight="300" fontStyle="normal" fontSize="1.125rem">TEST TEXT</Text>
          </Container>
        </VStack>
      </VStack>
  );
}

export default App;
