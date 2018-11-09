import React, { Component } from 'react'
import PageTransition from 'gatsby-plugin-page-transitions'
import Layout from '../components/Layout'
import css from '../assets/css/page.module.scss'
import { Container, Row, Col } from 'reactstrap'
import CVButtons from '../components/CVButtons'
import CVItems from '../components/CVItems'

const primaryRowStyle = {
	flex: '0 0 80%',
  alignItems: 'center',
  padding: '5em 0'
}

const secondaryRowStyle = {
	flex: '0 0 20%'
}

class AboutPage extends Component {
	state = {
		activeItem: 0,
		items: ['Summary', 'Skills', 'Experience', 'Education'],
	}

	handleSelection = index => {
		this.setState({
			activeItem: index
		})
	}

	render() {
		const { activeItem, items } = this.state

		return (
			<PageTransition>
				<Layout>
					<section className={css.aboutPageWrapper}>
						<Container className={css.aboutContainer}>
							<Row className="w-100" style={primaryRowStyle}>
								<Col sm="12">
									<CVItems activeItem={activeItem} />
								</Col>
							</Row>
							<Row className="w-100" style={secondaryRowStyle}>
								<Col sm="12">
									<CVButtons
										items={items}
										activeItem={activeItem}
										handleSelection={this.handleSelection}
									/>
								</Col>
							</Row>
						</Container>
					</section>
				</Layout>
			</PageTransition>
		)
	}
}

export default AboutPage
