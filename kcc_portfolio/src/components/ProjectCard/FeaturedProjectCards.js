import React from 'react';
import { Grid } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';

// Project Images
import project_img_01 from './img/project_img.jpg';

function FeaturedProjectCards() {
  return (
    <Grid pt="2em" align="left" templateColumns='repeat(3, 1fr)' gap="5em" justify="space-between">
        {/* Project Card Components */}
        {/* Row 1 */}
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

        {/* Row 2 */}
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

        {/* Row 3 */}
        <ProjectCard
            project_img={project_img_01}
            project_name="Project 7"
            project_desc="Proxy provider website including authentication, dashboard and dynamic features."
            project_tech="React - Bootstrap - Styled Components"
        />
    </Grid>
  )
}

export default FeaturedProjectCards