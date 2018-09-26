import React from 'react';
import css from '../assets/css/header.module.css';

const Header = ({title, subtitle, headerImage}) => (
	<header className={css.HeroWrapper}>
		<figure className={css.HeroImage} style={{ backgroundImage: `url(${headerImage})` }}>
			<div className={css.HeroInner}>
				<h1 className={css.HeroTitle}>
					<span>I'm </span>
					{ title.toUpperCase() }
				</h1>
				<h4 className={css.HeroSubtitle}>
					{ subtitle}
				</h4>
			</div>
		</figure>
	</header>
);

export default Header;

