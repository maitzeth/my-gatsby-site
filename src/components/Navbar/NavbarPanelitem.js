import React from 'react';
import css from '../../assets/css/navbarpanel.module.css';
import Link from '../Link';

const NavbarPanelItem = ({ isOpen, transition, name }) => (
  <li 
    className={ isOpen ? css.panelListActive : css.panelListDefault} 
    style={{ transitionDelay: `0.${transition + 3}s` }}>
    <Link to={`/#${name.toLowerCase()}`} className={css.panelListAnchor}>{name}</Link>
  </li>
);

export default NavbarPanelItem;