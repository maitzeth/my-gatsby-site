import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const Foot = () => {
	const currentDate = new Date()
	const year = currentDate.getFullYear()

	const footerStyles = {
		backgroundColor: 'black',
		color: '#fff',
		padding: '1em 0',
	}

	const heartColor = {
		color: 'red',
		margin: '0 5px',
	}

	const paragraphSize = {
		fontSize: '0.8em',
	}

	return (
		<footer style={footerStyles}>
			<Container>
				<Row>
					<Col sm="12" className="text-center">
						<p className="lead m-0" style={paragraphSize}>
							Made with
							<i
								className="fa fa-heart red-color"
								aria-hidden="true"
								style={heartColor}
							/>
							by me. © {year}
						</p>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Foot
