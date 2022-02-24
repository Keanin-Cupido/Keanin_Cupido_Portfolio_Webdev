import { Flex, Text, useColorMode } from '@chakra-ui/react';
import React from 'react'

function EducationItem(props) {
    
    const { colorMode } = useColorMode();
    const isDark = colorMode === 'dark';

  return (
    <Flex direction="column" align='flex-start' w="100%" alignItems='flex-start' gridGap="0.5em">
        <Flex direction={{sm: "column", md: "row"}} gridGap={{sm: "1em", md: "0em"}} justify="space-between" align="flex-start" w="100%" alignItems="flex-start">
            <Text fontWeight="300" fontStyle="normal" fontSize="1.5rem">{props.name}</Text>
            <Text fontWeight="300" fontStyle="normal" fontSize="1rem" color={isDark ? "#C4C4C4" : "#1A1A1A" }>{props.duration}</Text>
        </Flex>
        <Text fontWeight="300" fontStyle="normal" fontSize="0.875rem" color={isDark ? "#6CACE4" : "#004E93" }>{props.location}</Text>
        <Text fontWeight="300" fontStyle="normal" fontSize="1rem" color={isDark ? "#C4C4C4" : "#1A1A1A" }>
            {props.description.map(
                function desc_points(item, i){
                    return (
                        <li key={i}>{item}</li>
                    )
                }
            )}
        </Text>
    </Flex>
  )
}

export default EducationItem