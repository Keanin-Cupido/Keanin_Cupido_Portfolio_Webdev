import { Box, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "./components/Navbar";

function App() {
  return (
      <VStack>
        <Navbar />

        <VStack p="5em 15em 5em 15em" justify="left" align="left" gridGap="2em">
          <Flex direction="column" gridGap="1em">
            <Text>Hey, I'm</Text>
            <Heading fontWeight="700" fontStyle="normal" fontSize="6rem">Keanin Cupido</Heading>
          </Flex>
          <Flex direction="column" gridGap="1.5em">
            <Text fontWeight="200" fontStyle="normal" fontSize="1.125rem">
              I'm a software engineer based in Toronto, Canada and also a communication and journalism student. 
              I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. 
              I have been freelancing for a year now while studying at the university and I've manage to gain a decent amount of experience and valuable knowledge from all different kinds of fields throughout my projects/work.
            </Text>
            <Link display="flex" direction="row" justify="center" align="center" gridGap="1em">
              <Text fontWeight="300" fontStyle="normal" fontSize="1.5rem" >
                Say hi
              </Text>
              <FaArrowRight />
            </Link>
          </Flex>
        </VStack>
      </VStack>
  );
}

export default App;
