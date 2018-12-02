import { Link } from 'gatsby'
import React, { Fragment } from 'react'
import { Button } from 'reactstrap'
import '../assets/css/global.scss'

const primaryStyle = {
	borderRadius: '0',
	backgroundColor: 'transparent',
	border: '2px solid #fff',
	padding: '0.5em 3em',
	position: 'relative',
	overflow: 'hidden',
}

const secondaryStyle = {
	borderRadius: '0',
	backgroundColor: 'transparent',
	border: '2px solid #000',
	padding: '0.5em 3em',
	position: 'relative',
	overflow: 'hidden',
}

const CustomButton = ({ text, link, color, external = false }) => {
	const buttonInner =
		color === 'black' ? (
			<Button color="primary" style={primaryStyle}>
				<span>{text}</span>
			</Button>
		) : (
			<Button color="secondary" style={secondaryStyle}>
				<span>{text}</span>
			</Button>
		)

	return (
		<Fragment>
			{!external ? (
				<Link to={link}>{buttonInner}</Link>
			) : (
				<a href={link} target="_blank" rel="noopener noreferrer">
					{buttonInner}
				</a>
			)}
		</Fragment>
	)
}

export default CustomButton
