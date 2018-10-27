import React from 'react'
import css from '../assets/css/about.module.scss'

const AboutSectionItem = ({ name, active, handleSectionActive, id }) => (
	<li
		className={active ? css.aboutListItemActive : css.aboutListItem}
		onClick={() => {
			handleSectionActive(id)
		}}
	>
		<span>{name}</span>
	</li>
)

export default AboutSectionItem
