import React, { Fragment } from 'react'
import css from '../assets/css/global.scss'
import { Link } from 'gatsby'
import { Button } from 'reactstrap'

const CustomButton = ({ text, link, color, external = false }) => {
	const buttonInner =
		color === 'black' ? (
			<Button color="primary">
				<span>{text}</span>
			</Button>
		) : (
			<Button color="secondary">
				<span>{text}</span>
			</Button>
		)

	return (
		<Fragment>
			{!external ? (
				<Link to={link}>{buttonInner}</Link>
			) : (
				<a src={link} target="_blank">
					{buttonInner}
				</a>
			)}
		</Fragment>
	)
}

export default CustomButton