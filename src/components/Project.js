import React from 'react'
import { Col } from 'reactstrap'
import css from '../assets/css/project.module.scss'
import { Link } from 'gatsby'

const Project = ({ fields, frontmatter, opacity, separation, id }) => {
	const { src } = frontmatter.cover.childImageSharp.fluid
	const { slug } = fields
	const { client } = frontmatter;

	const imageTitle = client.split(' ').join("-")

	return (
		<Col
			sm="4"
			className={`${
				opacity ? css.overlayActive : css.overlayDefault
			} ${separation}`}
		>
			<Link to={slug}>
				<div
					className={`uk-cover-container uk-height-medium ${css.ProjectImage}`}
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