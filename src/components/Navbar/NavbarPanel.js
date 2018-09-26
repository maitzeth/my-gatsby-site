import React from 'react';
import NavbarPanelItem from './NavbarPanelitem';
import css from '../../assets/css/navbarpanel.module.css';

const NavbarPanel = ({ handleToggler, isOpen, items }) => (
  <div onClick={handleToggler} className={isOpen ? css.panelActive : css.panelDefault}>
    <ul className={css.panelList}>
      { items.map((item, index) => <NavbarPanelItem key={index} title={item} transition={index} isOpen={isOpen} />) }
    </ul>
  </div>
);

export default NavbarPanel;