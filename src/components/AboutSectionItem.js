import React from 'react';
import css from '../assets/css/about.module.scss';

const AboutSectionItem = ({ name, isActive, handleSectionActive, id }) => (
	<li 
		className={isActive ? css.aboutListItemActive : css.aboutListItem} 
		onClick={() => { handleSectionActive(id) }}>
		<span>{name}</span>
	</li>
);

export default AboutSectionItem;