import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import AboutSectionItem from './AboutSectionItem'
import css from '../assets/css/about.module.scss'
import AboutItemContent from './AboutItemContent'

class AboutSection extends Component {


	render() {
		const { sections } = this.state;

		return (
			<Container fluid className="m-0 p-0">
				<Row noGutters className="align-items-center">
					<Col sm="5">
						<div className={css.aboutItemsWrapper}>
							<ul className={css.aboutList}>
								{sections.map(({ name, id }, index) => (
									<AboutSectionItem
										key={index}
										name={name}
									/>
								))}
							</ul>
						</div>
					</Col>
					<Col sm="7">
						<AboutItemContent sections={sections} />
					</Col>
				</Row>
			</Container>
		)
	}
}

export default AboutSection
