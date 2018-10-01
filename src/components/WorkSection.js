import React from 'react';
import css from '../assets/css/workSection.module.css';
import { Container, Row, Col } from 'reactstrap';
import Work from './Work';
import WorkImage from './WorkImage';

class WorkSection extends React.Component {
	state = {
		activeWork: 0
	}

	handleActive = work => {
		this.setState({ activeWork: work })
	};

	render() {
		const { title, data } = this.props;
		const { activeWork } = this.state;

		return (
			<Container fluid className={`${css.WorkWrapper} p-0`}>
				<Row className="no-gutters">
					<Col>
						<h2 className={css.WorkTitle}>{ title }</h2>
					</Col>
				</Row>
				<Row className={`mt-5 no-gutters align-items-center ${css.WorksSectionWrapper}`}>
					<Col sm="6">
						{ 
							data.map(({node}, index) => {
								return (
									<Work 
										key={node.id} 
										id={index} 
										title={node.title} 
										activeWork={activeWork}
										handleActive={this.handleActive} />
								)
							})
						}
					</Col>
					<Col sm="6">
						<div className={css.ImageWrapper}>
							{
								data.map(({node}, index) => {
									return (
										<WorkImage 
											key={node.id} 
											id={index}
											title={node.title}
											activeWork={activeWork}
											handleActive={this.handleActive}
											{...node.featured_media}
										/>
									)
								})
							}
						</div>
					</Col>
				</Row>
				
			</Container>
		)
	}
}



export default WorkSection;