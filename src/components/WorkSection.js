import React from 'react';
import PropTypes from 'prop-types';
import css from '../assets/css/workSection.module.css';
import { Container, Row, Col } from 'reactstrap';
import Work from './Work';

const WorkSection = ({ title, data }) => {

	if (data.length === 0) {
		return <h1>Loading...</h1>
	}

	return (
		<Container className={css.WorkWrapper}>
			<Row>
				<Col>
					<h2 className={css.WorkTitle}>{ title }</h2>
				</Col>
			</Row>
			<Row className="mt-5">
				{ data.map(work =>  <Work key={work.node.id} title={work.node.title} {...work.node.featured_media} />) }
			</Row>		
		</Container>
	);
}

WorkSection.propTypes = {
	title: PropTypes.string.isRequired
};



export default WorkSection;