import React, { Component } from 'react';
import NavbarToggler from './NavbarToggler';
import NavbarPanel from './NavbarPanel';
import { Navbar, Nav, NavbarBrand } from 'reactstrap';
import myLogo from '../../assets/img/logo-black.png';


class Menu extends Component {
  state = {
    isOpen: false
  };

  handleToggler = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;
    const { items } = this.props;

    return (
      <Navbar className="fixed-top bg-white p-0 px-3">
        <NavbarBrand href="/">
          <img src={myLogo} alt="Logo Navbar" style={{ height: 'auto', width: '60px', display: 'block' }} />
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavbarToggler handleToggler={this.handleToggler} isOpen={isOpen} />
        </Nav>
        <NavbarPanel 
          handleToggler={this.handleToggler} 
          isOpen={isOpen} 
          items={items} />
      </Navbar>
    )
  }
};

export default Menu;