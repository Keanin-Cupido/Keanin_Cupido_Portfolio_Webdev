import { Flex } from '@chakra-ui/react'
import React from 'react'
import EducationItem from './EducationItem'

function EducationList() {
    return (
        <Flex direction="column" align='flex-start' w="100%" alignItems='flex-start' gridGap="3em">
            <EducationItem 
                name="University of The Western Cape"
                duration="2017-2021"
                location="South Africa"
                description={[
                    "Bachelor's degree in Computer Science"
                ]}
            />
            <EducationItem 
                name="HTS Bellville THS"
                duration="2014-2016"
                location="South Africa"
                description={[
                    "Matric"
                ]}
            />
        </Flex>
      )
}

export default EducationList