import { Grid } from '@chakra-ui/react';
import React from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard';

// Projects Images
import project_img_01 from './img/project_img.jpg';

function ProjectsCards() {
  return (
    <Grid p="3em 0em 0em 0em" m={0} align="left" w="100%" templateColumns={{md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)', '2xl': 'repeat(5, 1fr)'}} gap="5em" justify="space-between">
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
        <ProjectCard
            project_img={project_img_01}
            project_name="Project 7"
            project_desc="Proxy provider website including authentication, dashboard and dynamic features."
            project_tech="React - Bootstrap - Styled Components"
        />
        <ProjectCard
            project_img={project_img_01}
            project_name="Project 8"
            project_desc="Proxy provider website including authentication, dashboard and dynamic features."
            project_tech="React - Bootstrap - Styled Components"
        />
        <ProjectCard
            project_img={project_img_01}
            project_name="Project 9"
            project_desc="Proxy provider website including authentication, dashboard and dynamic features."
            project_tech="React - Bootstrap - Styled Components"
        />
        <ProjectCard
            project_img={project_img_01}
            project_name="Project 10"
            project_desc="Proxy provider website including authentication, dashboard and dynamic features."
            project_tech="React - Bootstrap - Styled Components"
        />
        <ProjectCard
            project_img={project_img_01}
            project_name="Project 11"
            project_desc="Proxy provider website including authentication, dashboard and dynamic features."
            project_tech="React - Bootstrap - Styled Components"
        />
        <ProjectCard
            project_img={project_img_01}
            project_name="Project 12"
            project_desc="Proxy provider website including authentication, dashboard and dynamic features."
            project_tech="React - Bootstrap - Styled Components"
        />
        <ProjectCard
            project_img={project_img_01}
            project_name="Project 13"
            project_desc="Proxy provider website including authentication, dashboard and dynamic features."
            project_tech="React - Bootstrap - Styled Components"
        />
        <ProjectCard
            project_img={project_img_01}
            project_name="Project 14"
            project_desc="Proxy provider website including authentication, dashboard and dynamic features."
            project_tech="React - Bootstrap - Styled Components"
        />
        <ProjectCard
            project_img={project_img_01}
            project_name="Project 15"
            project_desc="Proxy provider website including authentication, dashboard and dynamic features."
            project_tech="React - Bootstrap - Styled Components"
        />
    </Grid>
  )
}

export default ProjectsCards