import { Link } from 'gatsby';
import React from 'react';
import { Col } from 'reactstrap';
import css from '../assets/css/project.module.scss';

const Project = ({ fields, frontmatter, opacity, separation, id }) => {
	const { src } = frontmatter.cover.childImageSharp.fluid;
	const { slug } = fields;
	const { client } = frontmatter;

	const imageTitle = client.split(' ').join('-');

	return (
		<Col xs="12" sm="4" className={`${opacity ? css.overlayActive : css.overlayDefault} ${separation}`}>
			<Link to={slug}>
				<div className={css.ProjectImage}>
					<img
						src={src}
						alt={`project ${client.toLowerCase()} ${id}`}
						title={`project-${imageTitle.toLowerCase()}-${id}`}
						className={css.ProjectImageItem}
					/>
				</div>
			</Link>
		</Col>
	);
};

export default Project;
