import React from 'react';
import ProjectItem from './ProjectItem';
import styled from 'styled-components';

import { ProjectWrapper, ProjectInner, Title } from './Layout/Framework';

const ProjectContainer = styled(ProjectWrapper)`
  padding-bottom: 2em;
`;

const ProjectSection = ({ projects }) => (
  <ProjectContainer> 
    <Title>Latest Works</Title>
    <ProjectInner>
      {
        projects.map((project, index) => <ProjectItem key={index} {...project} />)
      }
    </ProjectInner>
  </ProjectContainer>
)

export default ProjectSection;