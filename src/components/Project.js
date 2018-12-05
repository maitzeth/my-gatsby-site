import { Link } from 'gatsby';
import React from 'react';
import { Col } from 'reactstrap';
import css from '../assets/css/project.module.scss';
import Img from "gatsby-image"

const Project = ({ fields, frontmatter, opacity, separation, id }) => {
  const { fluid } = frontmatter.cover.childImageSharp;
  const { slug } = fields;
  const { client } = frontmatter;

  const imageTitle = client.split(' ').join('-');

  return (
    <Col xs="12" sm="4" className={`${opacity ? css.overlayActive : css.overlayDefault} ${separation}`}>
      <Link to={slug}>
        <div className={css.ProjectImage}>
          <Img 
            fluid={fluid} 
            className={css.ProjectImageItem} 
            alt={`project ${client.toLowerCase()} ${id}`}
            title={`project-${imageTitle.toLowerCase()}-${id}`} 
          />
        </div>
      </Link>
    </Col>
  );
};

export default Project;
