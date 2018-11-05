import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import css from '../assets/css/project.module.scss'
import Project from './Project'
import CustomButton from './CustomButton'

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
							<h2 className={`display-4 ${css.sectionTitle}`}>Latest Works</h2>
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
							<CustomButton text="View more" link="/projects" color="black" />
						</Col>
					</Row>
				</Container>
			</Container>
		)
	}
}

export default Projects