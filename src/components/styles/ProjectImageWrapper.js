import styled from 'styled-components';

const ProjectImageWrapper = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 250px;
  filter: grayscale(100%);
  transition: all 200ms ease;
  overflow: hidden;
  position: relative;

  &:hover {
    filter: grayscale(0%);
  }

  @media only screen and (max-width: 575.98px) {
    height: 200px;
  }

  @media (max-width: 767.98px) {
    height: 200px;
  }  
`;

export default ProjectImageWrapper;