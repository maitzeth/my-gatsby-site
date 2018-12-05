import React from 'react';
import css from '../assets/css/menu.module.scss';

const NavbarToggler = ({ handleToggler, isActive }) => (
  <button onClick={handleToggler} className={css.navbarToggler}>
    <div className={isActive ? css.togglerOpen : css.togglerDefault} />
    <div className={isActive ? css.togglerOpen : css.togglerDefault} />
    <div className={isActive ? css.togglerOpen : css.togglerDefault} />
  </button>
);

export default NavbarToggler;
