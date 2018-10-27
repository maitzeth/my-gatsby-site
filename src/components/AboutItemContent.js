import React, { Fragment } from 'react'
import css from '../assets/css/about.module.scss'
import Fade from 'react-reveal/Fade'
import { Row, Col, Card, CardBody, CardText, CardTitle } from 'reactstrap'
import aboutImage from '../assets/images/about.jpg';

const AboutItemContent = ({ sections }) => {
	return (
		<Fragment>
			{sections.map(item => {
				return (
					item.active && (
						<Fade key={item.id}>
							<div className={css.aboutContent}>
								{item.content1 && (
									<Fragment>
										<img src={aboutImage} alt="about me" className={css.aboutImage} />
										<p className="lead text-center">{item.content1}</p>
									</Fragment>
								)}

								{item.content2 && (
									<Row>
										{item.content2.map(skill => (
											<Col key={`col-${skill}`} sm="6">
												<h4>{skill}</h4>
											</Col>
										))}
									</Row>
								)}

								{item.content3 && (
									<Row noGutters>
										{item.content3.map((social, index) => (
											<Col
												key={`socialItem-${index}`}
												sm="6"
												className="text-center"
											>
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

								{item.content4 && (
									<Row>
										{item.content4.map(({ url, place, job, time }) => (
											<Col key={`work-${job}`} sm="12" className="my-1">
												<Card className={css.timeLineWrapper}>
													<CardBody>
														<CardTitle>{job}</CardTitle>
														<CardText className="text-muted mb-2">
															{ time }
														</CardText>
														<CardText>
															<small className="text-muted">
																<a
																	href={url}
																	target="_blank"
																	rel="noopener noreferrer"
																	className={css.aboutAnchor}
																>
																	{place}
																</a>
															</small>
														</CardText>
													</CardBody>
												</Card>
											</Col>
										))}
									</Row>
								)}
							</div>
						</Fade>
					)
				)
			})}
		</Fragment>
	)
}

export default AboutItemContent
