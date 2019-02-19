import React from 'react';
import ProjectItem from './styles/ProjectItem';
import styled from 'styled-components';
import { ProjectWrapper, ProjectInner, Title } from './Layout/Framework';
import Btn from './styles/Btn';

const ButtonWrapper = styled.div`
  margin-bottom: 1.5rem;
  text-align: center;
`;

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
    <ButtonWrapper>
      <Btn to="works">
        View more
      </Btn>
    </ButtonWrapper>
  </ProjectContainer>
)

export default ProjectSection;