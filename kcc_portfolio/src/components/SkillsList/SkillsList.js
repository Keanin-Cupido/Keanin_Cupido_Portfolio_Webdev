import { Box, Divider, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'

// Icons
import { FaCss3, FaHtml5, FaJs, FaPhp, FaPython, FaReact } from 'react-icons/fa'
import { SiAdobeillustrator, SiAdobephotoshop, SiBlender, SiBootstrap, SiChakraui, SiExpress, SiFigma, SiGit, SiGithub, SiJquery, SiMongodb, SiNodedotjs, SiNpm, SiSass, SiSemanticuireact, SiTypescript, SiUnrealengine, SiVisualstudiocode } from 'react-icons/si'
import SkillsItem from './SkillsItem'


function SkillsList() {
  return (
    <HStack align="left" justify="space-between">
        <Flex direction="column" gridGap="1em">
            <Text fontWeight="300" fontStyle="normal" fontSize="1rem" align="left" justify="left" pb="0.5em">Languages & Libraries</Text>
            <SkillsItem 
                icon={<FaHtml5 size="30px" />}
                name="HTML"
            />
            <SkillsItem 
                icon={<FaCss3 size="30px" />}
                name="CSS"
            />
            <SkillsItem 
                icon={<FaJs size="30px" />}
                name="JavaScript"
            />
            <SkillsItem 
                icon={<SiJquery size="30px" />}
                name="jQuery"
            />
            <SkillsItem 
                icon={<FaReact size="30px" />}
                name="React JS"
            />
            <SkillsItem 
                icon={<SiTypescript size="30px" />}
                name="TypeScript"
            />
            <SkillsItem 
                icon={<SiSass size="30px" />}
                name="Sass"
            />
            <SkillsItem 
                icon={<SiBootstrap size="30px" />}
                name="Bootstrap"
            />
            <SkillsItem 
                icon={<SiChakraui size="30px" />}
                name="Chakra UI"
            />
            <SkillsItem 
                icon={<SiSemanticuireact size="30px" />}
                name="Semantic UI"
            />

            <Box w="100%" pt="1em" pb="1em">
                <Divider orientation="horizontal" colorScheme="white"/>
            </Box>
            
            <SkillsItem 
                icon={<FaPhp size="30px" />}
                name="PHP"
            />
            <SkillsItem 
                icon={<FaPython size="30px" />}
                name="Python"
            />
            <SkillsItem 
                icon={<SiNodedotjs size="30px" />}
                name="Node.js"
            />
            <SkillsItem 
                icon={<SiExpress size="30px" />}
                name="Express.js"
            />
            <SkillsItem 
                icon={<SiMongodb size="30px" />}
                name="MongoDB"
            />
        </Flex>
        <Flex direction="column" gridGap="1em">
            <Text fontWeight="300" fontStyle="normal" fontSize="1rem" align="left" justify="left" pb="0.5em">Applications</Text>
            <SkillsItem 
                icon={<SiVisualstudiocode size="30px" />}
                name="VS Code"
            />
            <SkillsItem 
                icon={<SiGit size="30px" />}
                name="Git"
            />
            <SkillsItem 
                icon={<SiGithub size="30px" />}
                name="Github"
            />
            <SkillsItem 
                icon={<SiNpm size="30px" />}
                name="Node Package Manager (npm)"
            />

            <Box w="100%" pt="1em" pb="1em">
                <Divider orientation="horizontal" colorScheme="white"/>
            </Box>

            <SkillsItem 
                icon={<SiAdobephotoshop size="30px" />}
                name="Photoshop"
            />
            <SkillsItem 
                icon={<SiAdobeillustrator size="30px" />}
                name="Illustrator"
            />
            <SkillsItem 
                icon={<SiFigma size="30px" />}
                name="Figma"
            />
            <SkillsItem 
                icon={<SiBlender size="30px" />}
                name="Blender"
            />
            <SkillsItem 
                icon={<SiUnrealengine size="30px" />}
                name="Unreal Engine"
            />
        </Flex>
        <Flex direction="column" gridGap="1em">
            <Text fontWeight="300" fontStyle="normal" fontSize="1rem" align="left" justify="left" pb="0.5em">Platforms</Text>
            <SkillsItem 
                icon={<FaHtml5 size="30px" />}
                name="HTML"
            />
        </Flex>
        <Flex direction="column" gridGap="1em">
            <Text fontWeight="300" fontStyle="normal" fontSize="1rem" align="left" justify="left" pb="0.5em">Miscellaneous</Text>
            <SkillsItem 
                icon={<FaHtml5 size="30px" />}
                name="HTML"
            />
        </Flex>
    </HStack>
  )
}

export default SkillsList