import { Link } from 'gatsby'
import React from 'react'
import { Col } from 'reactstrap'
import css from '../assets/css/project.module.scss'
import 'uikit/dist/css/uikit-core.min.css'
import 'uikit/dist/js/uikit-core.min.js'

const Project = ({ fields, frontmatter, opacity, separation, id }) => {
  const { src } = frontmatter.cover.childImageSharp.fluid
  const { slug } = fields
  const { client } = frontmatter

  const imageTitle = client.split(' ').join('-')

  return (
    <Col
      xs="12"
      sm="4"
      className={`${
        opacity ? css.overlayActive : css.overlayDefault
      } ${separation}`}
    >
      <Link to={slug}>
        <div
          className={`uk-cover-container default-height ${css.ProjectImage}`}
        >
          <img
            src={src}
            alt={`project ${client.toLowerCase()} ${id}`}
            uk-cover="true"
            title={`project-${imageTitle.toLowerCase()}-${id}`}
          />
        </div>
      </Link>
    </Col>
  )
}

export default Project
