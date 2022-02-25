import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

function SkillsItem(prop) {
  return (
    <Flex direction="row" justify="flex-start" align="center" gridGap="1em">
        {prop.icon}
        <Text fontSize="0.9rem">{prop.name}</Text>
    </Flex>
  )
}

export default SkillsItem