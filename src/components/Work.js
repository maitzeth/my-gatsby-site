import React from 'react';
import css from '../assets/css/workSection.module.css';
import { Card, CardBody, CardTitle, Col } from 'reactstrap';

const Work = ({title, src}) => (
	<Col sm="4">
		<Card className={css.CardWrapper}>
	    <CardBody className={css.CardImage} style={{ backgroundImage: `url(${src})` }}>
	      <CardTitle className={css.CardTitle}>{ title }</CardTitle>
	    </CardBody>
	  </Card>
  </Col>
);

export default Work;