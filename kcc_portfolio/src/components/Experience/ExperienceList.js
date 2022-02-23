import { Flex } from '@chakra-ui/react'
import React from 'react'
import ExperienceItem from './ExperienceItem'

function ExperienceList() {
  return (
    <Flex direction="column" align='flex-start' w="100%" alignItems='flex-start' gridGap="3em">
        <ExperienceItem 
            job="Frontend Engineer (Remote)"
            duration="Jul 2021 - Present"
            location="Selfbook / US - New York"
            description={[
                "Developing screens and UI components for the web application using React and Tailwind.", 
                "Fixing UI issues and integrating backend APIs with Redux Saga."
            ]}
        />
        <ExperienceItem 
            job="Software Developer (Remote)"
            duration="Jun 2021 - Present"
            location="Wevoz / Italy"
            description={[
                "Developing mobile and web applications using React and React Native.", 
                "Developing web scraping bots using Python and Selenium.",
                "Helping with PHP backend tasks and occasionally working with different programming languages.",
                "Consulting on frontend tech stack and integrating multiple external API’s across all platforms."
            ]}
        />
    </Flex>
  )
}

export default ExperienceList