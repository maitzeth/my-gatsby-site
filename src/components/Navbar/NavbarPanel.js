import React from 'react';
import NavbarPanelItem from './NavbarPanelitem';
import css from '../../assets/css/navbarpanel.module.css';

const NavbarPanel = ({ handleToggler, isOpen, links }) => (
  <div onClick={handleToggler} className={isOpen ? css.panelActive : css.panelDefault}>
    <ul className={css.panelList}>
      { links.map((link, index) => <NavbarPanelItem key={index} {...link} isOpen={isOpen} transition={index} />) }
    </ul>
  </div>
);

export default NavbarPanel;