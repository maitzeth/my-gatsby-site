import React from 'react';
import css from '../assets/css/workSection.module.css';
import { Card, CardBody, CardTitle, Col } from 'reactstrap';
import { Link } from "gatsby"

const Work = ({title, localFile }) => {
	const image = localFile ? localFile.childImageSharp.resolutions.src : 'https://via.placeholder.com/500x500';
	return (
		<Col sm="4">
			<Link to="/home/">
				<Card className={css.CardWrapper}>
			    <CardBody className={css.CardImage} style={{ backgroundImage: `url(${image})` }}>
		      	<CardTitle className={css.CardTitle}>{ title }</CardTitle>
			    </CardBody>
			  </Card>
		  </Link>
	  </Col>
	);
}

export default Work;