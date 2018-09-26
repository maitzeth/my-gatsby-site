import React from 'react';
import NavbarPanelItem from './NavbarPanelitem';
import css from '../../assets/css/navbarpanel.module.css';

const NavbarPanel = ({ handleToggler, isOpen, menuItems }) => (
  <div onClick={handleToggler} className={isOpen ? css.panelActive : css.panelDefault}>
    <ul className={css.panelList}>
    	{ menuItems.map((item, index) => <NavbarPanelItem key={item.object_id} {...item} transition={index} isOpen={isOpen} />) }
    </ul>
  </div>
);

export default NavbarPanel;