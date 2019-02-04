import React from 'react';
import ProjectItem from './ProjectItem';

import { ProjectWrapper, ProjectInner, Title } from './Layout/Framework';

const ProjectSection = ({ projects }) => (
  <ProjectWrapper> 
    <Title>Latest Works</Title>
    <ProjectInner>
      {
        projects.map((project, index) => <ProjectItem key={index} {...project} />)
      }
    </ProjectInner>
  </ProjectWrapper>
)

export default ProjectSection;