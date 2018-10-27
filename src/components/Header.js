import React from 'react'
import HeaderText from './HeaderText'
import GoTo from './GoTo'
import css from '../assets/css/header.module.scss'

const Header = ({ title }) => (
	<header className={css.headerWrapper}>
		<HeaderText title={title} />
		<GoTo />
	</header>
)

export default Header
