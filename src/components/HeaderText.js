import React from 'react';
import css from '../assets/css/header.module.scss';

const HeaderText = ({ title }) => (
	<div className={css.headerTextWrapper}>
		<h1 className={css.headerTitle}>
			Hi, i'm <span> <b>{ title }</b> </span>
		</h1>
	</div>
);

export default HeaderText;