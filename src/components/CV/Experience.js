import React from 'react'
import { Fade } from 'react-reveal'
import css from './cv.module.scss'
import { Card, CardBody, Container, Row, Col } from 'reactstrap'

const customStyles = {
	color: 'whitesmoke',
	textAlign: 'center'
}

const Job = ({ time, job, client, url, description }) => (
	<div className={css.timeYear}>
		<span>{time}</span>
		<Card className={css.workDescription}>
			<CardBody className={css.cardBody}>
				<h4>{job}</h4>
				<p className="lead my-1">{description}</p>
				<small className="text-muted">
					<a href={url} target="_blank" rel="nofollow noopener noreferrer">
						{client}
					</a>
				</small>
			</CardBody>
		</Card>
	</div>
)

class Experience extends React.Component {
	state = {
		works: [
			{
				time: '2018-Now',
				job: 'Javascript Front-End Developer',
				client: 'EgoAgency Argentina',
				url: 'http://www.agenciaego.com.ar/',
				description:
					'Working on a product for Santander Tecnología, that tracks the documentation for opening accounts for all Bank agencies in Argentina.',
			},
			{
				time: '2016-2018',
				job: 'Web Developer',
				client: 'GlodStudio',
				url: 'http://glodstudio.com/',
				description:
					'Making websites for multiple clients, working with front-end and back-end.',
			},
			{
				time: '2015-2017',
				job: 'Web Development Teacher',
				client: 'Escuela Web LLC',
				url: 'http://escuelaweb.net',
				description:
					'Teaching courses face to face about HTML, CSS, GIT, GULP, Wordpress.',
			},
		],
	}

	render() {
		const { works } = this.state

		return (
			<Fade>
				<Container>
					<Row>
						<Col>
							<h1 className="mb-5" style={customStyles}>Experience</h1>
						</Col>
					</Row>
					<Row>
						<Col sm={{ size: '8', offset: 2 }}>
							<div className={css.timeLineWrapper}>
								{works.map((work, index) => (
									<Job key={index} {...work} />
								))}
							</div>
						</Col>
					</Row>
				</Container>
			</Fade>
		)
	}
}

export default Experience