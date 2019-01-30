import React, { Fragment } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { Title } from './Layout/Framework'
import ProjectItem from './ProjectItem';

const ProjectContent = styled.div`
  max-width: 1600px;
  padding: 0.5rem 1.0875rem;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px 50px;
  margin-top: 1.5rem;
  
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectSection = ({ projects }) => (
  <ProjectContent> 
    <Title>Latest Works</Title>
    <ProjectGrid>
      <Fade>
        <Fragment>
          {
            projects.map((project, index) => <ProjectItem key={index} {...project} />)
          }
        </Fragment>
      </Fade>
    </ProjectGrid>
  </ProjectContent>
)

export default ProjectSection;