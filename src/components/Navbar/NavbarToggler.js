import React from 'react';
import navbar from '../../assets/css/navbar.module.css';

const NavbarToggler = ({ handleToggler, isOpen }) => (
  <button onClick={handleToggler} className={navbar.navbarToggler}>
    <div className={isOpen ? navbar.navbarTogglerItemOpen : navbar.navbarTogglerItem} />
    <div className={isOpen ? navbar.navbarTogglerItemOpen : navbar.navbarTogglerItem} />
    <div className={isOpen ? navbar.navbarTogglerItemOpen : navbar.navbarTogglerItem} />
  </button>
);

export default NavbarToggler;