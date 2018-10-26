import React, { Fragment } from 'react'
import css from '../assets/css/about.module.scss'
import Fade from 'react-reveal/Fade'
import { Row, Col } from 'reactstrap'

const AboutItemContent = ({ sections }) => {
	return (
		<Fragment>
			{sections.map(
				section =>
					section.isActive && (
						<Fade key={section.id}>
							<div className={css.aboutContent} {...section}>
								{section.content1 && (
									<p className="lead text-center">{section.content1}</p>
								)}
								{section.content2 && (
									<Row>
										{section.content2.map(skill => (
											<Col sm="6">
												<h4>{skill}</h4>
											</Col>
										))}
									</Row>
								)}
								{section.content3 && (
									<Row noGutters>
										{section.content3.map(social => (
											<Col sm="6" className="text-center">
												<a
													href={social.url}
													target="_blank"
													className={css.socialAnchor}
													rel="noopener noreferrer"
												>
													<i className={`fa fa-${social.icon} d-block`} />
													<p className="lead m-0">
														{social.icon.toUpperCase()}
													</p>
												</a>
											</Col>
										))}
									</Row>
								)}
							</div>
						</Fade>
					)
			)}
		</Fragment>
	)
}

export default AboutItemContent
