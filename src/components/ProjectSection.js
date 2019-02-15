import React from 'react';
import ProjectItem from './styles/ProjectItem';
import styled from 'styled-components';

import { ProjectWrapper, ProjectInner, Title } from './Layout/Framework';

const ProjectContainer = styled(ProjectWrapper)`
  padding-bottom: 2em;
`;

const ProjectSection = ({ projects }) => (
  <ProjectContainer> 
    <Title>Latest Works</Title>
    <ProjectInner isFront={true}>
      {
        projects.map((project, index) => <ProjectItem key={index} {...project} />)
      }
    </ProjectInner>
  </ProjectContainer>
)

export default ProjectSection;