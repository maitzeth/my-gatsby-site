import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import css from '../assets/css/project.module.scss'
import Project from './Project'
import globalStyles from '../assets/css/global.scss'
import { Link } from 'gatsby'

class Projects extends Component {
	state = {
		opacity: false,
	}

	handleActiveOpacity = () => {
		this.setState({
			opacity: true,
		})
	}

	handleLeaveOpacity = () => {
		this.setState({
			opacity: false,
		})
	}

	render() {
		const { projectEdges } = this.props
		const { opacity } = this.state

		return (
			<Container
				fluid
				className={css.projectsContainer}
				onMouseEnter={this.handleActiveOpacity}
				onMouseLeave={this.handleLeaveOpacity}
			>
				<Container>
					<Row>
						<Col>
							<h2 className={`display-4 ${css.sectionTitle}`}>Works</h2>
						</Col>
					</Row>
					<Row className="mt-5">
						{projectEdges.map(({ node }) => (
							<Project
								key={node.frontmatter.client}
								{...node}
								opacity={opacity}
							/>
						))}
					</Row>
					<Row className="mt-5">
						<Col className="text-center">
							<Link to='/projects'>
								<Button  className={globalStyles.whiteBtn}>
									<span>View more</span>
								</Button>
							</Link>
						</Col>
					</Row>
				</Container>
			</Container>
		)
	}
}

export default Projects
