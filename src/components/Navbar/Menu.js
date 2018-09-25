import React, { Component } from 'react';
import NavbarToggler from './NavbarToggler';
import NavbarPanel from './NavbarPanel';
import { Navbar, Nav, NavbarBrand } from 'reactstrap';
import logo from '../../assets/img/logo-white.png';


class Menu extends Component {
  state = {
    isOpen: false,
    links: [
      { name: 'Home'  },
      { name: 'About' },
      { name: 'Work'  }
    ]
  };

  handleToggler = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen, links } = this.state;

    return (
      <Navbar className="fixed-top">
        <NavbarBrand href="/">
          <img src={logo} alt="Logo Navbar" style={{ height: 'auto', width: '80px', display: 'block' }} />
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavbarToggler handleToggler={this.handleToggler} isOpen={isOpen} />
        </Nav>
        <NavbarPanel handleToggler={this.handleToggler} isOpen={isOpen} links={links} />
      </Navbar>
    )
  }
};

export default Menu;