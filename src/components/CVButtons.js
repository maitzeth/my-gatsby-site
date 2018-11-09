import React from 'react'
import { Row, Col, Button } from 'reactstrap'

const CVButtons = ({ activeItem, items, handleSelection }) => (
	<Row>
		{items.map((item, index) => (
			<Col sm="3" key={`item-${index}`}>
				<Button
					color="primary"
					className={`btn-block ${activeItem === index && 'activeItem'}`}
					onClick={() => handleSelection(index)}
				>
					<span>{item}</span>
				</Button>
			</Col>
		))}
	</Row>
)

export default CVButtons