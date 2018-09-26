import React from 'react';
import css from '../../assets/css/navbarpanel.module.css';
import Link from '../Link';

const NavbarPanelItem = ({ isOpen, transition, title }) => (
  <li 
	  className={ isOpen ? css.panelListActive : css.panelListDefault} 
	  style={{ transitionDelay: `0.${transition + 3}s` }}>
	  <Link to={`${title.toLowerCase()}`} className={css.panelListAnchor}>{title}</Link>
	</li>
);

export default NavbarPanelItem;