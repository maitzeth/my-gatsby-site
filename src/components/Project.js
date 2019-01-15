import { Link } from 'gatsby';
import React from 'react';
import { Col } from 'reactstrap';
import Img from "gatsby-image";
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
  margin: 0.5em 0;

  &:hover {
    filter: grayscale(0%);
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.xs}) {
    height: 200px;
    margin: 0.5em 0;
  }

  @media (max-width: 767.98px) {
    height: 200px;
  }  
`;

const ProjectImageItem = styled(Img)`
  transition: all 200ms ease;
  max-width: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  vertical-align: middle;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Project = ({ fields, frontmatter, id }) => {
  const { fluid } = frontmatter.cover.childImageSharp;
  const { slug } = fields;
  const { client } = frontmatter;

  const imageTitle = client.split(' ').join('-');

  return (
    <Col xs="12" sm="4">
      <Link to={slug}>
        <ProjectImageWrapper>
          <ProjectImageItem
            fluid={fluid}
            alt={`project ${client.toLowerCase()} ${id}`}
            title={`project-${imageTitle.toLowerCase()}-${id}`}
          />
        </ProjectImageWrapper>
      </Link>
    </Col>
  );
};

export default Project;
