import React from 'react';
import styled from 'styled-components';
import ProjectItem from './ProjectItem';

const ProjectContent = styled.div`
  max-width: 1600px;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px 50px;
`;

const ProjectSection = ({ projects }) => {

  return (
    <ProjectContent>
      <ProjectGrid>
        {
          projects.map((project, index) => (
            <ProjectItem delay={index} key={index} {...project} />)
          )
        }
      </ProjectGrid>
    </ProjectContent>
  )
};

export default ProjectSection;