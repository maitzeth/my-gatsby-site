import React from 'react';
import PropTypes from 'prop-types';
import css from '../assets/css/workSection.module.css';
import { Container, Row, Col } from 'reactstrap';
import Work from './Work';

const WorkSection = ({ title, data }) => (
	<Container className={css.WorkWrapper}>
		<Row>
			<Col>
				<h2 className={css.WorkTitle}>{ title }</h2>
			</Col>
		</Row>
		<Row className="mt-4">
			{ data.map(work =>  <Work key={work.node.id} title={work.node.title} src={work.node.featured_media.localFile.childImageSharp.resolutions.src} />) }
		</Row>		
	</Container>
);

WorkSection.propTypes = {
	title: PropTypes.string.isRequired
};



export default WorkSection;