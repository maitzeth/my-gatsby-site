import React from 'react'
import { Col } from 'reactstrap'
import css from '../assets/css/project.module.scss'
import { Link } from "gatsby"

const Project = ({ fields, frontmatter, opacity }) => {
	const { src } = frontmatter.cover.childImageSharp.fluid;
	const { slug } = fields;

	return (
		<Col sm="4" className={opacity ? css.overlayActive : css.overlayDefault}>
			<Link to={slug}>
				<figure className="m-0 p-0 project">
					<div
						className={css.ProjectImage}
						style={{ backgroundImage: `url(${src})` }}
					/>
				</figure>
			</Link>
		</Col>
	)
}

export default Project
