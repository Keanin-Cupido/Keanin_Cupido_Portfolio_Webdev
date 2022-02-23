import { Flex, Grid, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { useColorMode } from '@chakra-ui/color-mode'

import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard/ProjectCard";

// Project Images
import project_img_01 from './components/ProjectCard/img/project_img.jpg';

function App() {

  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
      <VStack w="100%">
        <Navbar />

        <VStack w="100%" p="5em 15em 5em 15em" justify="left" align="left" spacing="2em">
          <Flex direction="column" gridGap="1em">
            <Text>Hey, I'm</Text>
            <Heading fontWeight="700" fontStyle="normal" fontSize="6rem" bgGradient='linear-gradient(90deg, #9845E8 0%, #33D2FF 20%, #DD5789 50%)' bgClip='text'>Keanin Cupido</Heading>
          </Flex>
          
          <Flex direction="column" gridGap="1.5em">
            <Text color={isDark ? "#F0F0F0" : "#1A1A1A" } fontWeight="200" fontStyle="normal" fontSize="1.125rem">
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

        {/* Featured Projects */}
        <Flex direction="column" p="0em 15em 5em 15em" align='flex-start' w="100%" alignItems='flex-start' verticalAlign='top' spacing="1em">
          <Text fontWeight="300" fontStyle="normal" fontSize="1.125rem">FEATURED PROJECTS</Text>
          <Grid pt="2em" justify="left" align="left" templateColumns='repeat(3, 1fr)' gap="3em">
            {/* Project Card Components */}
              <ProjectCard
                project_img={project_img_01}
                project_name="Project 1"
                project_desc="Proxy provider website including authentication, dashboard and dynamic features."
                project_tech="React - Bootstrap - Styled Components"
              />
              <ProjectCard
                project_img={project_img_01}
                project_name="Project 2"
                project_desc="Proxy provider website including authentication, dashboard and dynamic features."
                project_tech="React - Bootstrap - Styled Components"
              />
              <ProjectCard
                project_img={project_img_01}
                project_name="Project 3"
                project_desc="Proxy provider website including authentication, dashboard and dynamic features."
                project_tech="React - Bootstrap - Styled Components"
              />
              <ProjectCard
                project_img={project_img_01}
                project_name="Project 4"
                project_desc="Proxy provider website including authentication, dashboard and dynamic features."
                project_tech="React - Bootstrap - Styled Components"
              />
              <ProjectCard
                project_img={project_img_01}
                project_name="Project 5"
                project_desc="Proxy provider website including authentication, dashboard and dynamic features."
                project_tech="React - Bootstrap - Styled Components"
              />
              <ProjectCard
                project_img={project_img_01}
                project_name="Project 6"
                project_desc="Proxy provider website including authentication, dashboard and dynamic features."
                project_tech="React - Bootstrap - Styled Components"
              />
          </Grid>
        </Flex>
      </VStack>
  );
}

export default App;
