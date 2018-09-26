import React from 'react';
import css from '../assets/css/aboutSection.module.css';

const SocialItem = ({ name, url }) => (
	<li className={css.SocialElement}>
		<a href={url} target="_blank" rel="noopener noreferrer">
			<i className={`fa fa-${name} ${css.SocialIcon}`}></i>
		</a>
	</li>
);

export default SocialItem;